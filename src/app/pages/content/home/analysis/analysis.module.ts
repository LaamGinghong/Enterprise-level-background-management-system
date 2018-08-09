import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnalysisComponent} from './analysis.component';
import {AnalysisRoutingModule} from './analysis-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NgxEchartsModule} from 'ngx-echarts';
import { AnalysisCardComponent } from './analysis-card/analysis-card.component';

@NgModule({
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  declarations: [AnalysisComponent, AnalysisCardComponent]
})
export class AnalysisModule {
}
