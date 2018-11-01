import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicFormComponent} from './basic-form.component';
import {BasicFormRoutingModule} from './basic-form-routing.module';
import {BasicFormFormComponent} from './basic-form-form/basic-form-form.component';
import {FormsModule} from '@angular/forms';
import {SharingModule} from '../../../../sharing/sharing.module';

@NgModule({
  imports: [
    CommonModule,
    BasicFormRoutingModule,
    FormsModule,
    SharingModule
  ],
  declarations: [BasicFormComponent, BasicFormFormComponent]
})
export class BasicFormModule {
}
