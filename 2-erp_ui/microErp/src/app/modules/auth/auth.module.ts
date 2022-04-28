import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginUtilisateurComponent } from './components/login-utilisateur/login-utilisateur.component';
import { RegisterUtilisateurComponent } from './components/register-utilisateur/register-utilisateur.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginUtilisateurComponent,
    RegisterUtilisateurComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,   // ajout pour gerer les form group
    AuthRoutingModule
  ]
})
export class AuthModule { }
