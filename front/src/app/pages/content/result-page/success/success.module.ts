import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuccessComponent} from './success.component';
import {SuccessRoutingModule} from './success-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SuccessRoutingModule
  ],
  declarations: [SuccessComponent]
})
export class SuccessModule {
}
