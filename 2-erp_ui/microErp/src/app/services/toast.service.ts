import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class toastService {

    constructor(private _toastr: ToastrService) {}

    erreurConnexion(): void {
    this._toastr.error("le mot de passe et ou l'adresse e-mail est invalide","erreur !",{
        progressBar: true, //renvoi en direct le temps d'affichage 
        positionClass: 'toast-bottom-right', // permet de changer la position du pop a l'écran
    })
    }

    succesConnexion(): void {
    this._toastr.success("Vous êtes authentifié.","succès !",{
        progressBar: true,
        positionClass: 'toast-bottom-right', })
    }

    succesSupressionFourniture(): void {
    this._toastr.success("forniture suprimé avec succès.","succès !",{
        progressBar: false,
        positionClass: 'toast-bottom-right', })
    }

    succesUpdateFourniture(): void {
    this._toastr.success("forniture mis a jour avec succès.","succès !",{
        progressBar: false,
        positionClass: 'toast-bottom-right', })
    }

    succesAddFourniture(): void {
        this._toastr.success("forniture ajouté avec succès.","succès !",{
            progressBar: false,
            positionClass: 'toast-bottom-right', })
        }
}
