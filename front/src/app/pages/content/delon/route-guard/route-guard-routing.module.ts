import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RouteGuardComponent} from './route-guard.component';

const routes: Routes = [{
  path: '',
  component: RouteGuardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RouteGuardRoutingModule {
}
