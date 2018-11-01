import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdvancedFormComponent} from './advanced-form.component';
import {AdvancedFormRoutingModule} from './advanced-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdvancedFormRoutingModule
  ],
  declarations: [AdvancedFormComponent]
})
export class AdvancedFormModule {
}
