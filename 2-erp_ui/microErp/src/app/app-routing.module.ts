import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './modules/main/components/pages/accueil/accueil.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: AccueilComponent },
    { path: 'auth', loadChildren: ()=>import('./modules/auth/auth.module').then(m => m.AuthModule)},
    { path: 'utilisateur', loadChildren: ()=>import('./modules/utilisateur/utilisateur.module').then(m => m.UtilisateurModule)},
    { path: 'fourniture', loadChildren: ()=>import('./modules/fourniture/fourniture.module').then(m => m.FournitureModule)},
    { path: 'admin', loadChildren: ()=>import('./modules/admin/admin-routing.module').then(m=> m.AdminRoutingModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
