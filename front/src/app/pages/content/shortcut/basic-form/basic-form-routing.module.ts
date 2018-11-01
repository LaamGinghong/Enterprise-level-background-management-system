import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasicFormComponent} from './basic-form.component';

const routes: Routes = [{
  path: '',
  component: BasicFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicFormRoutingModule {
}
