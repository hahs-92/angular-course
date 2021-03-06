import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
//strategy externa
import {  QuicklinkStrategy } from 'ngx-quicklink';
//pages
import { NotFoundComponent } from './not-found/not-found.component';
//services
import { CustomPreloadService } from './services/custom-preload.service';
//guards
import { AdminGuard } from './guards/admin.guard';


//rules
const routes: Routes = [

  {
    //add module website
    path: '',
    loadChildren: () => import('./website/website.module')
      .then(m => m.WebsiteModule), //habilita lazy Loading and code spliting
    //custom strategy
    data: {
      preload: true
    }
  },
  {
    //add module cms
    path: 'cms',
    canActivate: [AdminGuard],
    loadChildren: () => import('./cms/cms.module')
      .then(m => m.CmsModule) //habilita lazy Loading and code spliting
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules
      //preloadingStrategy: CustomPreloadService //our strategy
      preloadingStrategy: QuicklinkStrategy //externa extrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
