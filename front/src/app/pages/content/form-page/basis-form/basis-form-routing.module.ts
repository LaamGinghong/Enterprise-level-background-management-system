import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasisFormComponent} from './basis-form.component';

const routes: Routes = [{
  path: '',
  component: BasisFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BasisFormRoutingModule {
}
