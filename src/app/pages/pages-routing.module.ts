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
  }, {
    path: '403',
    loadChildren: './four-zero-three/four-zero-three.module#FourZeroThreeModule'
  }, {
    path: '404',
    loadChildren: './four-zero-four/four-zero-four.module#FourZeroFourModule'
  }, {
    path: '500',
    loadChildren: './five-hundred/five-hundred.module#FiveHundredModule'
  }, {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  }, {
    path: 'registerResult',
    loadChildren: './register-result/register-result.module#RegisterResultModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {
}
