import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FailComponent} from './fail.component';
import {FailRoutingModule} from './fail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FailRoutingModule
  ],
  declarations: [FailComponent]
})
export class FailModule {
}
