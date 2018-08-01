import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicFormComponent} from './basic-form.component';
import {BasicFormRoutingModule} from './basic-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BasicFormRoutingModule
  ],
  declarations: [BasicFormComponent]
})
export class BasicFormModule {
}
