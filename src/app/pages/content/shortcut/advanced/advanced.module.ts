import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdvancedComponent} from './advanced.component';
import {AdvancedRoutingModule} from './advanced-routing.module';
import {SharingModule} from '../../../../sharing/sharing.module';
import {AdvancedStepComponent} from './advanced-step/advanced-step.component';

@NgModule({
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    SharingModule
  ],
  declarations: [AdvancedComponent, AdvancedStepComponent]
})
export class AdvancedModule {
}
