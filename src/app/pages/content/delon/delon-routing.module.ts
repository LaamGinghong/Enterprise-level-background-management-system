import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DelonComponent} from './delon.component';

const routes: Routes = [{
  path: '',
  component: DelonComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DelonRoutingModule {
}
