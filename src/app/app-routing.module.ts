import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { NotFoundComponent } from './not-found/not-found.component';

//rules
const routes: Routes = [

  {
    //add module website
    path: '',
    loadChildren: () => import('./website/website.module')
      .then(m => m.WebsiteModule) //habilita lazy Loading and code spliting
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
