import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormPageComponent} from './form-page.component';
import {FormPageRoutingModule} from './form-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormPageRoutingModule
  ],
  declarations: [FormPageComponent]
})
export class FormPageModule {
}
