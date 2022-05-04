import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fourniture } from 'src/app/models/fourniture/fourniture.model';
import { AuthService } from 'src/app/services/auth.service';
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
    private _route: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    if (!this._authService.isConnected()) {
      this._route.navigate(["auth", "login"])
    }
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
