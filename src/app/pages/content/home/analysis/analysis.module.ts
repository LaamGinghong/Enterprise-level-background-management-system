import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnalysisComponent} from './analysis.component';
import {AnalysisRoutingModule} from './analysis-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NgxEchartsModule} from 'ngx-echarts';
import {AnalysisCardComponent} from './analysis-card/analysis-card.component';
import {AnalysisBarComponent} from './analysis-bar/analysis-bar.component';
import {AnalysisMiddleComponent} from './analysis-middle/analysis-middle.component';
import {AnalysisBottomComponent} from './analysis-bottom/analysis-bottom.component';

@NgModule({
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  declarations: [AnalysisComponent, AnalysisCardComponent, AnalysisBarComponent, AnalysisMiddleComponent, AnalysisBottomComponent]
})
export class AnalysisModule {
}
