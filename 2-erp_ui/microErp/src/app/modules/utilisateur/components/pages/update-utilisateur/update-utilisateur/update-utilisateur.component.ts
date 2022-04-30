import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { AuthService } from 'src/app/services/auth.service';
import { utilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {

  public utilisateur: utilisateur;
  public updateForm: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    private _utilisateurService: utilisateurService,
    private _authService: AuthService,
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    // je vérifie que l'utilisateur est bien connecté sinon redirection
    if(!this._authService.isConnected()){
      this._route.navigate(['auth', 'login'])
      return;
    }
    // je récupère l'id compris dans le session storage
    const id: number = parseInt(sessionStorage.getItem("id"))
    this._utilisateurService.GetById(id).subscribe(
      {
        next: (utilisateur) => {
          this.utilisateur = utilisateur
        },
        error: (errors) => {
          console.log(errors)
        },
        complete: () => {
          // je vérifie si l'utilisateur existe
          if (!this.utilisateur || this.utilisateur == null){
            this._route.navigate(['utilisateur'])
            return
          }
          // je vérifie si l'user a modifier est le meme que celui qui procède a la modification
            // if (this.utilisateur.) {
              
            // }
          
          // alor tout est ok je peux créer mon formulaire d'update
          this.updateForm = this._formBuilder.group({
            nom : [this.utilisateur.nom, [Validators.required]],
            prenom : [this.utilisateur.prenom, [Validators.required]],
            dateNaissance : [this.utilisateur.dateNaissance, [Validators.required]],
            email : [this.utilisateur.email, [Validators.required]],
            password : [this.utilisateur.email, [Validators.required]]
          })
        }
      }
    )
  }

  annuler(){
    const id: number = parseInt(sessionStorage.getItem("id"))
    this._route.navigate(['profil/utilisateur', id]);
  }

  update(){
    // si le formulaire d'update n'est pas valable
    console.log("je lance l'update")
    if(this.updateForm.invalid){
      return;
    }
    // sinon tout est ok
    else{
      let nom: string = this.updateForm.value['nom']
      let prenom: string = this.updateForm.value['prenom']
      let dateNaissance: Date = this.updateForm.value['dateNaissance']
      let email: string = this.updateForm.value['email']
      let password: string = this.updateForm.value['email']
      this._utilisateurService.update(this.utilisateur.id, nom, prenom, dateNaissance, email, password).subscribe({
        error: (errors) => {
          console.log(errors)
        },
        complete: () => {
          console.log("l'utilisateur a bien été modifié")
          const id: number = parseInt(sessionStorage.getItem("id"))
          this._route.navigate(['profil/utilisateur', id])
        }
      })
    }
  }
}
