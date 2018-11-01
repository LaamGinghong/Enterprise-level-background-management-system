import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WidgetsComponent} from './widgets.component';
import {WidgetsRoutingModule} from './widgets-routing.module';
import {WidgetsTopComponent} from './widgets-top/widgets-top.component';
import {SharingModule} from '../../../sharing/sharing.module';
import {WidgetsPersonalComponent} from './widgets-personal/widgets-personal.component';
import {WidgetsGridComponent} from './widgets-grid/widgets-grid.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    SharingModule
  ],
  declarations: [WidgetsComponent, WidgetsTopComponent, WidgetsPersonalComponent, WidgetsGridComponent]
})
export class WidgetsModule {
}
