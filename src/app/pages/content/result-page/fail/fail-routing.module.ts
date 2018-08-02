import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FailComponent} from './fail.component';

const routes: Routes = [{
  path: '',
  component: FailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FailRoutingModule {
}
