import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FourZeroFourComponent} from './four-zero-four.component';
import {FourZeroFourRoutingModule} from './four-zero-four-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FourZeroFourRoutingModule
  ],
  declarations: [FourZeroFourComponent]
})
export class FourZeroFourModule {
}
