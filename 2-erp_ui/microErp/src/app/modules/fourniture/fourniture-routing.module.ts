import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFournitureComponent } from './add-fourniture/add-fourniture.component';
import { AllByIdFournitureComponent } from './all-by-id-fourniture/all-by-id-fourniture.component';

const routes: Routes = [
  {path: 'fourniture/add', component: AddFournitureComponent},
  {path: 'fourniture/allById', component: AllByIdFournitureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournitureRoutingModule { }
