import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypographysComponent} from './typographys.component';
import {TypographysRoutingModule} from './typographys-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TypographysRoutingModule
  ],
  declarations: [TypographysComponent]
})
export class TypographysModule {
}
