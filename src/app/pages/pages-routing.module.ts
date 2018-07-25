import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [{
  path: 'pages',
  component: PagesComponent,
  children: [{
    path: '',
    redirectTo: 'content',
    pathMatch: 'full'
  }, {
    path: 'content',
    loadChildren: './content/content.module#ContentModule'
  }, {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {
}
