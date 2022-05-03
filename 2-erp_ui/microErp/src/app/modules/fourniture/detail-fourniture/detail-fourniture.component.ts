import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fourniture } from 'src/app/models/fourniture/fourniture.model';
import { fournitureService } from 'src/app/services/fourniture.service';

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
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let idFourniture = this._activatedRoute.snapshot.params["id"]
    this._fournitureService.getById(idFourniture).subscribe(fourniture =>{
        this.fourniture = fourniture
    })
  }

  chargerRouteModif(): void {

  }

  chargerRoutedelete(): void {

  }

  chargerRouteRetour(): void {
    this._route.navigate(["fourniture", "allById"])
  }
  
}
