import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExtrasComponent} from './extras.component';
import {ExtrasRoutingModule} from './extras-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExtrasRoutingModule
  ],
  declarations: [ExtrasComponent]
})
export class ExtrasModule {
}
