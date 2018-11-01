import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FourZeroThreeComponent} from './four-zero-three.component';
import {FourZeroThreeRoutingModule} from './four-zero-three-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FourZeroThreeRoutingModule
  ],
  declarations: [FourZeroThreeComponent]
})
export class FourZeroThreeModule {
}
