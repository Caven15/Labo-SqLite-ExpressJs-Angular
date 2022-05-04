import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUtilisateurComponent } from './all-utilisateur/all-utilisateur.component';
import { DetailUtilisateurComponent } from './detail-utilisateur/detail-utilisateur.component';

const routes: Routes = [
  {path: 'allUtilisateur', component: AllUtilisateurComponent},
  {path: 'detailUtilisateur', component: DetailUtilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
