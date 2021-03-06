import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/models/auth/loginForm.model';
import { utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { AuthService } from 'src/app/services/auth.service';
import { toastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-login-utilisateur',
  templateUrl: './login-utilisateur.component.html',
  styleUrls: ['./login-utilisateur.component.css']
})
export class LoginUtilisateurComponent implements OnInit {

  public LoginForm : FormGroup;
  public utilisateur : LoginForm;

  constructor(private _route : Router, 
              private _authService : AuthService, 
              private _formBuilder : FormBuilder,
              private _toast: toastService
              ) { }

  ngOnInit(): void {

    this.LoginForm = this._formBuilder.group({
      email : [null, [Validators.email,Validators.required]],
      password : [null, [Validators.required, Validators.minLength(2), Validators.minLength(20)]]
    })
  }



  login(): void{
    console.log("connection...");
    this.utilisateur = new LoginForm();
    this.utilisateur.email = this.LoginForm.value["email"];
    this.utilisateur.password = this.LoginForm.value["password"];
    let currentUser : utilisateur;
    this._authService.Login(this.LoginForm.value).subscribe(
      {
        next: (utilisateur) => {
          currentUser = utilisateur;
          if (currentUser && currentUser != null){
            this._route.navigate(["home"]);
            this._toast.succesConnexion()
          }
        },
        error: (error) => {
          this._toast.erreurConnexion()
          console.log(error)
        }
      }
    );
  }
}

