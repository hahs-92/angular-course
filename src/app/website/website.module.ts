import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//external libreries - modules
import { SwiperModule } from 'swiper/angular';
import SwiperCore ,{ Pagination } from 'swiper';
//routing
import { WebsiteRoutingModule } from './website-routing.module';
//strategy externa
import { QuicklinkModule } from 'ngx-quicklink';
//Pages
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
//components
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
//modules
import { SharedModule } from '../shared/shared.module';

//swiper
SwiperCore.use([Pagination]);

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    SharedModule,
    QuicklinkModule
  ]
})
export class WebsiteModule { }
