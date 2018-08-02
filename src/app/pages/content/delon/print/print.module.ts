import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrintComponent} from './print.component';
import {PrintRoutingModule} from './print-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrintRoutingModule
  ],
  declarations: [PrintComponent]
})
export class PrintModule {
}
