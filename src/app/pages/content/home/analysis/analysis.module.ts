import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnalysisComponent} from './analysis.component';
import {AnalysisRoutingModule} from './analysis-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  declarations: [AnalysisComponent]
})
export class AnalysisModule {
}
