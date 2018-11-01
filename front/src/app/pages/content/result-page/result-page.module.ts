import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultPageComponent} from './result-page.component';
import {ResultPageRoutingModule} from './result-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ResultPageRoutingModule
  ],
  declarations: [ResultPageComponent]
})
export class ResultPageModule {
}
