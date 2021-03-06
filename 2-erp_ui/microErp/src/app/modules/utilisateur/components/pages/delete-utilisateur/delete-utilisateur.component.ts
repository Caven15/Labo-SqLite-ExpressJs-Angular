import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { utilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-delete-utilisateur',
  templateUrl: './delete-utilisateur.component.html',
  styleUrls: ['./delete-utilisateur.component.css']
})
export class DeleteUtilisateurComponent implements OnInit {

  constructor(
    private _route : Router,
    private _authService: AuthService,
    private _utilisateurService: utilisateurService
  ) { }

  ngOnInit(): void {
    if (!this._authService.isConnected()) {
      this._route.navigate(["auth", "login"])
    }
  }

  retourArriere(): void {
    this._route.navigate(['profil'])
  }

  deleteUser(): void {
    let id: number = parseInt(sessionStorage.getItem("id"));
    this._utilisateurService.Delete(id).subscribe({
      error: (errors) =>{
        console.log(errors)
      },
      complete: () => {
        sessionStorage.clear()
        this._authService.logout()
        this._route.navigate(['auth', 'login'])
      }
    });
  }
}
