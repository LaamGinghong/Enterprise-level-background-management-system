import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouteGuardComponent} from './route-guard.component';
import {RouteGuardRoutingModule} from './route-guard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouteGuardRoutingModule
  ],
  declarations: [RouteGuardComponent]
})
export class RouteGuardModule {
}
