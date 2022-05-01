import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(
    private _route: Router
  ) { }

  ngOnInit(): void {
    console.log("activation du composant d'accueil !")
  }

  retourArriere(): void {
    this._route.navigate(['utilisateur', "profil"])
  }
}
