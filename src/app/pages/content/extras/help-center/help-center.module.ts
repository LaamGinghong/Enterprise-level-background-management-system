import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HelpCenterComponent} from './help-center.component';
import {HelpCenterRoutingModule} from './help-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HelpCenterRoutingModule
  ],
  declarations: [HelpCenterComponent]
})
export class HelpCenterModule {
}
