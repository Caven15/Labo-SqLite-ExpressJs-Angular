import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AllUtilisateurComponent } from './all-utilisateur/all-utilisateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DetailUtilisateurComponent } from './detail-utilisateur/detail-utilisateur.component';


@NgModule({
  declarations: [
    AllUtilisateurComponent,
    DetailUtilisateurComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
