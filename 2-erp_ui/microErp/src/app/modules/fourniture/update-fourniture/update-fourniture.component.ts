import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fourniture } from 'src/app/models/fourniture/fourniture.model';
import { AuthService } from 'src/app/services/auth.service';
import { fournitureService } from 'src/app/services/fourniture.service';

@Component({
  selector: 'app-update-fourniture',
  templateUrl: './update-fourniture.component.html',
  styleUrls: ['./update-fourniture.component.css']
})
export class UpdateFournitureComponent implements OnInit {

  public fourniture : fourniture
  public updateForm : FormGroup

  constructor(
    private _authService: AuthService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute,
    private _fournitureService: fournitureService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    if (!this._authService.isConnected()) {
      this._route.navigate(["auth", "login"])
    }
    else{
      
      let id: number = this._activatedRoute.snapshot.params["id"]
      this._fournitureService.getById(id).subscribe({
        next: (fourniture) => {
          this.fourniture = fourniture
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          this.updateForm = this._formBuilder.group({
            nom : [this.fourniture.nom, [Validators.required]],
            quantite : [this.fourniture.quantite, [Validators.required]]
          })
        }
      })
    }
  }

  update(): void {
    let id: number = this._activatedRoute.snapshot.params["id"]
    let nom: string = this.updateForm.value['nom']
    let quantite: number = this.updateForm.value['quantite']
    let id_utilisateur: number = parseInt(sessionStorage.getItem("id"))
    this._fournitureService.update(id, nom, quantite, id_utilisateur).subscribe({
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        this._route.navigate(["fourniture", "allById"])
      }
    })
  }
  annuler(): void {
    this._route.navigate(["fourniture", "allById"])
  }
}
