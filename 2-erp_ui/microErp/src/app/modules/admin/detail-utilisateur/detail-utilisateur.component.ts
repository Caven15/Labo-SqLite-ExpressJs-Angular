import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { AuthService } from 'src/app/services/auth.service';
import { utilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit {

  public utilisateur : utilisateur

  constructor(
    private _activatesRoute: ActivatedRoute,
    private _utilisateurService: utilisateurService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this._authService.isConnected()) {
      
    }
  }

  chargerUtilisateur(): void {
    let id:number = parseInt(this._activatesRoute.snapshot.params["id"])
    this._utilisateurService.GetById(id).subscribe({
      next: (utilisateur) => {
        this.utilisateur = utilisateur
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
