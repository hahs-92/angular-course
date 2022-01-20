import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {
    path: ':id',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
