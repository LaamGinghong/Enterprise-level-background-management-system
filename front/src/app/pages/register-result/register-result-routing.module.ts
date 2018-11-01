import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterResultComponent} from './register-result.component';

const routes: Routes = [{
  path: '',
  component: RegisterResultComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RegisterResultRoutingModule {
}
