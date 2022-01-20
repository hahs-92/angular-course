import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//router
import { CategoryRoutingModule } from './category-routing.module';
//pages
import { CategoryComponent } from './category.component';
//modules
import { SharedModule } from './../../../shared/shared.module';

@NgModule({
  declarations: [
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
