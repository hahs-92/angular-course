import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//add model route to components of this module
import { RouterModule } from '@angular/router';
//external libreries - modules
import { SwiperModule } from 'swiper/angular';
import SwiperCore ,{ Pagination } from 'swiper';
//directives
import { HighlightDirective } from './directives/highlight.directive';
//pipes
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
//pages
import { ImgComponent } from './components/img/img.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

//swiper
SwiperCore.use([Pagination]);

@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  //modules to export
  exports: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
  ]
})
export class SharedModule { }
