import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrintingComponent} from './printing.component';
import {PrintingRoutingModule} from './printing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrintingRoutingModule
    SharingModule
  ],
  declarations: [PrintingComponent]
})
export class PrintingModule {
}
