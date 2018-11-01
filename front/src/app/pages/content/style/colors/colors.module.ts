import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorsComponent} from './colors.component';
import {ColorsRoutingModule} from './colors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ColorsRoutingModule
  ],
  declarations: [ColorsComponent]
})
export class ColorsModule {
}
