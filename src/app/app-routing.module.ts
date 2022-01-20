import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy } from '@angular/router';
//pages
import { NotFoundComponent } from './not-found/not-found.component';
//services
import { CustomPreloadService } from './services/custom-preload.service';

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
      preloadingStrategy: CustomPreloadService //our strategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
