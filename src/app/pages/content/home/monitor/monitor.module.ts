import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonitorComponent} from './monitor.component';
import {MonitorRoutingModule} from './monitor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MonitorRoutingModule
  ],
  declarations: [MonitorComponent]
})
export class MonitorModule {
}
