import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonitorComponent} from './monitor.component';
import {MonitorRoutingModule} from './monitor-routing.module';
import {MonitorMapComponent} from './monitor-map/monitor-map.component';
import {MonitorLineComponent} from './monitor-line/monitor-line.component';
import {MonitorDashboardComponent} from './monitor-dashboard/monitor-dashboard.component';
import {MonitorPieComponent} from './monitor-pie/monitor-pie.component';
import {ViserModule} from 'viser-ng';
import {MonitorWordComponent} from './monitor-word/monitor-word.component';
import {HttpClientModule} from '@angular/common/http';
import {MonitorService} from './monitor.service';
import {MonitorAirComponent} from './monitor-air/monitor-air.component';
import {SharingModule} from '../../../../sharing/sharing.module';

@NgModule({
  imports: [
    CommonModule,
    MonitorRoutingModule,
    SharingModule,
    ViserModule,
    HttpClientModule
  ],
  declarations: [MonitorComponent, MonitorMapComponent, MonitorLineComponent, MonitorDashboardComponent, MonitorPieComponent, MonitorWordComponent, MonitorAirComponent],
  providers: [MonitorService]
})
export class MonitorModule {
}
