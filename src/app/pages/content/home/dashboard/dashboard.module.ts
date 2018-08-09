import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {NgZorroAntdModule} from '../../../../../../node_modules/ng-zorro-antd';
import {NgxEchartsModule} from 'ngx-echarts';
import {DashboardCardComponent} from './dashboard-card/dashboard-card.component';
import {DashboardChartComponent} from './dashboard-chart/dashboard-chart.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  declarations: [DashboardComponent, DashboardCardComponent, DashboardChartComponent]
})
export class DashboardModule {
}
