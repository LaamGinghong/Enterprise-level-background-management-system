import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StyleComponent} from './style.component';
import {StyleRoutingModule} from './style-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StyleRoutingModule
  ],
  declarations: [StyleComponent]
})
export class StyleModule {
}
