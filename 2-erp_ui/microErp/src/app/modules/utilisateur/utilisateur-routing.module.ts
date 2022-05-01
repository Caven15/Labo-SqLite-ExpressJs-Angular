import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilUtilisateurComponent } from './components/pages/profil-utilisateur/profil-utilisateur.component';
import { UpdateUtilisateurComponent } from './components/pages/update-utilisateur/update-utilisateur/update-utilisateur.component';

const routes: Routes = [
  { path: 'profil', component: ProfilUtilisateurComponent},
  { path: 'profil/update', component: UpdateUtilisateurComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
