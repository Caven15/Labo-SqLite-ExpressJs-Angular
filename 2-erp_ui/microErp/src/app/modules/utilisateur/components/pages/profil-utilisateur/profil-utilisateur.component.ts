import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { AuthService } from 'src/app/services/auth.service';
import { utilisateurService } from 'src/app/services/utilisateur.service';


@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {
  public utilisateur : utilisateur = new utilisateur;
  constructor(
    private _route : Router, 
    private _authService : AuthService, 
    private _utilisateurService : utilisateurService
    ) { }

  ngOnInit(): void {
    this.chargerUtilisateur()
  }

  chargerUtilisateur(): void {
    if(this._authService.isConnected()){
      let id: number = parseInt(sessionStorage.getItem("id"));
      this._utilisateurService.GetById(id).subscribe(utilisateur => {
        this.utilisateur = utilisateur;
      });
      return;
    }
    this._route.navigate(['login'])
  }
  
  chargerRouteUpdate(): void {
    this._route.navigate(['utilisateur/profil/update/utilisateur'])
  }
}
