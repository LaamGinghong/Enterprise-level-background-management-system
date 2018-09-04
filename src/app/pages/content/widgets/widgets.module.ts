import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WidgetsComponent} from './widgets.component';
import {WidgetsRoutingModule} from './widgets-routing.module';
import {WidgetsTopComponent} from './widgets-top/widgets-top.component';
import {SharingModule} from '../../../sharing/sharing.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    SharingModule
  ],
  declarations: [WidgetsComponent, WidgetsTopComponent]
})
export class WidgetsModule {
}
