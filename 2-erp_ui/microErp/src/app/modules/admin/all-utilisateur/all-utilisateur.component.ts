import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { AuthService } from 'src/app/services/auth.service';
import { utilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-all-utilisateur',
  templateUrl: './all-utilisateur.component.html',
  styleUrls: ['./all-utilisateur.component.css']
})
export class AllUtilisateurComponent implements OnInit {

  public utilisateurs: utilisateur[] = []

  constructor(
    private _utlisateurService: utilisateurService,
    private _authService: AuthService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    let id: number = parseInt(sessionStorage.getItem("isAdmin"))
    if (id == 1) {
      this._utlisateurService.getAll().subscribe({
        next: (utilisateurs) => {
          this.utilisateurs = utilisateurs
        },
        error: (error) =>{
          console.log(error)
        }
      })
    }
    else{
      this._authService.logout()
      this._route.navigate(["auth", "login"])
    }
  }

  detailUtilisateur(): void {
    this._route.navigate(["detailUtilisateur"])
  }
}
