import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fourniture } from 'src/app/models/fourniture/fourniture.model';
import { fournitureService } from 'src/app/services/fourniture.service';

@Component({
  selector: 'app-all-by-id-fourniture',
  templateUrl: './all-by-id-fourniture.component.html',
  styleUrls: ['./all-by-id-fourniture.component.css']
})
export class AllByIdFournitureComponent implements OnInit {

  public fournitures: fourniture[] = []

  constructor(
    private _fournitureService: fournitureService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.getAllById()
  }
  
  getAllById(): void {
    let id: number = parseInt(sessionStorage.getItem("id"))
    this._fournitureService.getAllById(id).subscribe({
      next: (fournitures) => {
        this.fournitures = fournitures
      },
      error: (error) => {
        console.log(error)
      },
      complete : () => {}
    })
  }

  chargeRouteAddFourniture(): void {
    this._route.navigate(["fourniture", "add"])
  }

  chargeRouteDetailFourniture(id): void {
    this._route.navigate(["fourniture", "detail", id])
  }
}
