import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournitureRoutingModule } from './fourniture-routing.module';
import { AddFournitureComponent } from './add-fourniture/add-fourniture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllByIdFournitureComponent } from './all-by-id-fourniture/all-by-id-fourniture.component';


@NgModule({
  declarations: [
    AddFournitureComponent,
    AllByIdFournitureComponent
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
