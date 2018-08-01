import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnalysisComponent} from './analysis.component';
import {AnalysisRoutingModule} from './analysis-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AnalysisRoutingModule
  ],
  declarations: [AnalysisComponent]
})
export class AnalysisModule {
}
