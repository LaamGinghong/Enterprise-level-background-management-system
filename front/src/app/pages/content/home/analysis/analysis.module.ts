import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnalysisComponent} from './analysis.component';
import {AnalysisRoutingModule} from './analysis-routing.module';
import {AnalysisCardComponent} from './analysis-card/analysis-card.component';
import {AnalysisBarComponent} from './analysis-bar/analysis-bar.component';
import {AnalysisMiddleComponent} from './analysis-middle/analysis-middle.component';
import {AnalysisBottomComponent} from './analysis-bottom/analysis-bottom.component';
import {SharingModule} from '../../../../sharing/sharing.module';
import {AnalysisService} from './analysis.service';

@NgModule({
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    SharingModule
  ],
  declarations: [AnalysisComponent, AnalysisCardComponent, AnalysisBarComponent, AnalysisMiddleComponent, AnalysisBottomComponent],
  providers: [AnalysisService]
})
export class AnalysisModule {
}
