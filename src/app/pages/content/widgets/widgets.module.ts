import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WidgetsComponent} from './widgets.component';
import {WidgetsRoutingModule} from './widgets-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetsRoutingModule
  ],
  declarations: [WidgetsComponent]
})
export class WidgetsModule {
}
