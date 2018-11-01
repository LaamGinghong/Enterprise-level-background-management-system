import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterResultComponent} from './register-result.component';
import {RegisterResultRoutingModule} from './register-result-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterResultRoutingModule
  ],
  declarations: [RegisterResultComponent]
})
export class RegisterResultModule {
}
