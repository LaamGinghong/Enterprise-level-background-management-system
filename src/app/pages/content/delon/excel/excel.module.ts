import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExcelComponent} from './excel.component';
import {ExcelRoutingModule} from './excel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExcelRoutingModule
  ],
  declarations: [ExcelComponent]
})
export class ExcelModule {
}
