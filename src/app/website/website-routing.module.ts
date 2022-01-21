import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './pages/home/home.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component'
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
//components
import { LayoutComponent } from './components/layout/layout.component';
//guards
import { AuthGuard } from '../guards/auth.guard';
import { ExitGuard } from '../guards/exit.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        // path: 'category/:id',
        // component: CategoryComponent
        path: 'category',
        loadChildren: () => import('./pages/category/category.module')
          .then(m => m.CategoryModule),
        //custom strategy
        data: {
          preload: true
        }
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: 'myCart',
        component: MyCartComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        canDeactivate: [ExitGuard],
        component: RegisterComponent
      },
      {
        path: 'profile',
        canActivate: [ AuthGuard], //protected
        component: ProfileComponent
      },
      {
        path: 'recovery',
        component: RecoveryComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
