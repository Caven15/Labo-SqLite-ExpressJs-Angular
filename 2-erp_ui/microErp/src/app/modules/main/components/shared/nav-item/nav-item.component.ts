import { Component, Input, OnInit } from '@angular/core';
import { INavItem } from 'src/app/models/inav/inav-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  @Input() navItem! : INavItem;
  @Input() parentUrl? : string;

  constructor() { }

  ngOnInit(): void {
  }

}
