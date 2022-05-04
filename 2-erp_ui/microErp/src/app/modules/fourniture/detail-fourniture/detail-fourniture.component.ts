import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fourniture } from 'src/app/models/fourniture/fourniture.model';
import { fournitureService } from 'src/app/services/fourniture.service';
import { AuthService } from 'src/app/services/auth.service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-detail-fourniture',
  templateUrl: './detail-fourniture.component.html',
  styleUrls: ['./detail-fourniture.component.css']
})
export class DetailFournitureComponent implements OnInit {
  public fourniture : fourniture = new fourniture
  

  constructor(
    private _route : Router,
    private _fournitureService: fournitureService,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _toast: toastService
  ) { }

  ngOnInit(): void {
    if (!this._authService.isConnected()) {
      this._route.navigate(["auth", "login"])
    }
    
    var idFourniture = this._activatedRoute.snapshot.params["id"]
    this._fournitureService.getById(idFourniture).subscribe(fourniture =>{
      this.fourniture = fourniture
      if (this.fourniture === null) {
        this._route.navigate(["fourniture", "allById"])
      }
    })
  }

  chargerRouteModif(): void {
    var idFourniture = this._activatedRoute.snapshot.params["id"]
    this._route.navigate(["fourniture", "update", idFourniture])
  }

  chargerRoutedelete(): void {
    var idFourniture = this._activatedRoute.snapshot.params["id"]
    this._fournitureService.Delete(idFourniture).subscribe({
      error: (error) =>{
        console.log(error)
      },
      complete: () => {
        this._route.navigate(["fourniture", "allById"])
        this._toast.succesSupressionFourniture()
      }
    })
  }

  chargerRouteRetour(): void {
    this._route.navigate(["fourniture", "allById"])
  }
  
}
