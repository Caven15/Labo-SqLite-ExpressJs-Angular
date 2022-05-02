import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournitureRoutingModule } from './fourniture-routing.module';
import { AddFournitureComponent } from './add-fourniture/add-fourniture.component';


@NgModule({
  declarations: [
    AddFournitureComponent
  ],
  imports: [
    CommonModule,
    FournitureRoutingModule
  ]
})
export class FournitureModule { }
