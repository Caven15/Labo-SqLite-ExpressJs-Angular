import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavItem } from 'src/app/models/inav/inav-item';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  public routes : INavItem[] = [];

  public isConnected: boolean = false;

  constructor(private _authService : AuthService, private _route: Router) {
    
    this._authService.currentUser.subscribe(
      {
        next : (utilisateur) => {
          this.isConnected = this._authService.isConnected();
          this.refresh();
          console.log('Est connecté 1: ' + this.isConnected);
        }
      }
    )
  }
  
  ngOnInit(): void {
    console.log('ngOnInit : ' + this.isConnected);
  }

  refresh(): void{

    if(this.isConnected){
      this.routes = [
        // {title: "Acceuil", url: "home", isVisible: true},
        {title: "Tous les articles", url: "/article/index", isVisible: true},
        {title: "Mes articles", url: "/article/listeByUser/", isVisible: true},
        {title: "Créer un article", url: "/article/create", isVisible: true},
        {title: "Profil Utilisateur", url: "/utilisateur/utilisateur", isVisible: this.isConnected}
      ];
    }
    else{
      this.routes = [
        // {title: "Acceuil", url: "home", isVisible: true},
        {title: "Inscription", url: "/auth/register", isVisible: !this.isConnected},
        {title: "Connexion", url: "/auth/login", isVisible: !this.isConnected}
      ];
    }
  }

  logout(){
    this._authService.logout();
  }
}
