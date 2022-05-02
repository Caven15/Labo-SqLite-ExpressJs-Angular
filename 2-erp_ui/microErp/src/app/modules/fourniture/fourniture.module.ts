import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournitureRoutingModule } from './fourniture-routing.module';
import { AddFournitureComponent } from './add-fourniture/add-fourniture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddFournitureComponent
  ],
  imports: [
    CommonModule,
    FournitureRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class FournitureModule { }
