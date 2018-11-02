import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardCardComponent} from './dashboard-card/dashboard-card.component';
import {DashboardChartComponent} from './dashboard-chart/dashboard-chart.component';
import {SharingModule} from '../../../../sharing/sharing.module';
import {DashboardService} from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharingModule
  ],
  declarations: [DashboardComponent, DashboardCardComponent, DashboardChartComponent],
  providers: [DashboardService]
})
export class DashboardModule {
}
