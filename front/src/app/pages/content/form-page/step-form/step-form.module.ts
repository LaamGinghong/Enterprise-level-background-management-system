import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepFormRoutingModule} from './step-form-routing.module';
import {StepFormComponent} from './step-form.component';

@NgModule({
  imports: [
    CommonModule,
    StepFormRoutingModule
  ],
  declarations: [StepFormComponent]
})
export class StepFormModule {
}
