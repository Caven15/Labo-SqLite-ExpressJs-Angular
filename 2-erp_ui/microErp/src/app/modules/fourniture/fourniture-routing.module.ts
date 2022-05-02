import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFournitureComponent } from './add-fourniture/add-fourniture.component';

const routes: Routes = [
  {path: 'fourniture/add', component: AddFournitureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournitureRoutingModule { }
