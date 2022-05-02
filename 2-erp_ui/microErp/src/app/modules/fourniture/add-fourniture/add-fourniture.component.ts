import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fourniture } from 'src/app/models/fourniture/fourniture.model';
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
    private _reactiveFormsModule : ReactiveFormsModule
  ) { }

  ngOnInit(): void {
    this.addForm = this._formBuilder.group({
      nom : [null, [Validators.required, Validators.minLength(1), Validators.maxLength(80)]],
      quantite : [null, [Validators.required, Validators.min(1), Validators.max(50)]]
    })
  }

  add(): void {
    console.log("ajout fourniture...")
    this._fournitureService.add(
      this.fourniture["nom"], 
      this.fourniture["quantite"], 
      parseInt(sessionStorage.getItem("id")
    ))
    .subscribe(
      {
        next : (data) => {
          this._route.navigate(["utilisateur", "profil"])
        },
        error : (error) => {
          this.errorMessage = "l'ajout de la commande a échouer..."
          console.log(error)
        }
      }
    )
  }

  annuler() : void {
    this._route.navigate(["utilisateur", "profil"])
  }
}
