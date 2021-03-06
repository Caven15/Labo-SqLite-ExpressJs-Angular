import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFournitureComponent } from './add-fourniture/add-fourniture.component';
import { AllByIdFournitureComponent } from './all-by-id-fourniture/all-by-id-fourniture.component';
import { DetailFournitureComponent } from './detail-fourniture/detail-fourniture.component';
import { UpdateFournitureComponent } from './update-fourniture/update-fourniture.component';


const routes: Routes = [
  {path: 'fourniture/add', component: AddFournitureComponent},
  {path: 'fourniture/allById', component: AllByIdFournitureComponent},
  {path: 'fourniture/detail/:id', component: DetailFournitureComponent},
  {path: 'fourniture/update/:id', component: UpdateFournitureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournitureRoutingModule { }
