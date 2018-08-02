import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasisFormComponent} from './basis-form.component';
import {BasisFormRoutingModule} from './basis-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BasisFormRoutingModule
  ],
  declarations: [BasisFormComponent]
})
export class BasisFormModule {
}
