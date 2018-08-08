import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {NgZorroAntdModule} from '../../../../../../node_modules/ng-zorro-antd';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
