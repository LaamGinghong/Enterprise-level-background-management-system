import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonitorComponent} from './monitor.component';
import {MonitorRoutingModule} from './monitor-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { MonitorMapComponent } from './monitor-map/monitor-map.component';

@NgModule({
  imports: [
    CommonModule,
    MonitorRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [MonitorComponent, MonitorMapComponent]
})
export class MonitorModule {
}
