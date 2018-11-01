import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DelonComponent} from './delon.component';
import {DelonRoutingModule} from './delon-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DelonRoutingModule
  ],
  declarations: [DelonComponent]
})
export class DelonModule {
}
