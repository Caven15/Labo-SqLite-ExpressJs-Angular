import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from '../main/components/pages/accueil/accueil.component';
import { DeleteUtilisateurComponent } from './components/pages/delete-utilisateur/delete-utilisateur.component';
import { ProfilUtilisateurComponent } from './components/pages/profil-utilisateur/profil-utilisateur.component';
import { UpdateUtilisateurComponent } from './components/pages/update-utilisateur/update-utilisateur.component';

const routes: Routes = [
  { path: 'profil', component: ProfilUtilisateurComponent},
  { path: 'profil/update', component: UpdateUtilisateurComponent},
  { path: 'profil/delete', component: DeleteUtilisateurComponent},
  { path: 'accueil', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
