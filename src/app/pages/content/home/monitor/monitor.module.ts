import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonitorComponent} from './monitor.component';
import {MonitorRoutingModule} from './monitor-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MonitorMapComponent} from './monitor-map/monitor-map.component';
import {MonitorLineComponent} from './monitor-line/monitor-line.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {MonitorDashboardComponent} from './monitor-dashboard/monitor-dashboard.component';
import {MonitorPieComponent} from './monitor-pie/monitor-pie.component';
import {ViserModule} from 'viser-ng';

@NgModule({
  imports: [
    CommonModule,
    MonitorRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule,
    ViserModule
  ],
  declarations: [MonitorComponent, MonitorMapComponent, MonitorLineComponent, MonitorDashboardComponent, MonitorPieComponent]
})
export class MonitorModule {
}
