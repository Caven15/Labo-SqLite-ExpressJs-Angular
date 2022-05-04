import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fourniture } from 'src/app/models/fourniture/fourniture.model';
import { AuthService } from 'src/app/services/auth.service';
import { fournitureService } from 'src/app/services/fourniture.service';

@Component({
  selector: 'app-add-fourniture',
  templateUrl: './add-fourniture.component.html',
  styleUrls: ['./add-fourniture.component.css']
})
export class AddFournitureComponent implements OnInit {
  public addForm: FormGroup
  public fourniture : fourniture
  public errorMessage : string = "";

  constructor(
    private _route: Router,
    private _fournitureService: fournitureService,
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    if (!this._authService.isConnected()) {
      this._route.navigate(["auth", "login"])
    }
    this.addForm = this._formBuilder.group({
      nom : [null, [Validators.required, Validators.minLength(1), Validators.maxLength(80)]],
      quantite : [null, [Validators.required, Validators.min(1), Validators.max(50)]]
    })
  }

  add(): void {
    this.conversion();
    this._fournitureService.add(this.fourniture).subscribe(
      {
        next : (data) => {
          console.log("la fourniture a bien été ajouté")
          this._route.navigate(["fourniture", "fourniture", "allById"])
        },
        error : (error) => {
          this.errorMessage = "l'ajout de la commande a échouer..."
          console.log(error)
        }
      }
    )
  }

  conversion(): void{
    this.fourniture = new fourniture()
    this.fourniture.nom = this.addForm.value["nom"]
    this.fourniture.quantite = this.addForm.value["quantite"]
    this.fourniture.id_utilisateur = parseInt(sessionStorage.getItem("id"))
  }

  annuler() : void {
    this._route.navigate(["fourniture", "allById"])
  }
}
