import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilComponent} from './util.component';
import {UtilRoutingModule} from './util-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UtilRoutingModule
  ],
  declarations: [UtilComponent]
})
export class UtilModule {
}
