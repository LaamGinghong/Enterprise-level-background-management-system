import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormPageComponent} from './form-page.component';

const routes: Routes = [{
  path: '',
  component: FormPageComponent,
  children: [{
    path: '',
    redirectTo: 'basisForm',
    pathMatch: 'full'
  }, {
    path: 'basisForm',
    loadChildren: './basis-form/basis-form.module#BasisFormModule'
  }, {
    path: 'stepForm',
    loadChildren: './step-form/step-form.module#StepFormModule'
  }, {
    path: 'advancedForm',
    loadChildren: './advanced-form/advanced-form.module#AdvancedFormModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormPageRoutingModule {
}
