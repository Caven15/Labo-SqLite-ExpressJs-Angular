import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { ProfilUtilisateurComponent } from './components/pages/profil-utilisateur/profil-utilisateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUtilisateurComponent } from './components/pages/update-utilisateur/update-utilisateur/update-utilisateur.component';


@NgModule({
  declarations: [
    ProfilUtilisateurComponent,
    UpdateUtilisateurComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    UtilisateurRoutingModule
  ]
})
export class UtilisateurModule { }
