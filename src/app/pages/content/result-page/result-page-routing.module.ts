import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResultPageComponent} from './result-page.component';

const routes: Routes = [{
  path: '',
  component: ResultPageComponent,
  children: [{
    path: '',
    redirectTo: 'success',
    pathMatch: 'full'
  }, {
    path: 'success',
    loadChildren: './success/success.module#SuccessModule'
  }, {
    path: 'fail',
    loadChildren: './fail/fail.module#FailModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultPageRoutingModule {
}
