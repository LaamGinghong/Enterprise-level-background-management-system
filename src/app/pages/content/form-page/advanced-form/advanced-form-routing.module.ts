import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdvancedFormComponent} from './advanced-form.component';

const routes: Routes = [{
  path: '',
  component: AdvancedFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdvancedFormRoutingModule {
}
