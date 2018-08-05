import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgZorroAntdModule } from '../../../../../../node_modules/ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
