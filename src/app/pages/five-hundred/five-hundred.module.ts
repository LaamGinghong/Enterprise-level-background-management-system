import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiveHundredComponent} from './five-hundred.component';
import {FiveHundredRoutingModule} from './five-hundred-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FiveHundredRoutingModule
  ],
  declarations: [FiveHundredComponent]
})
export class FiveHundredModule {
}
