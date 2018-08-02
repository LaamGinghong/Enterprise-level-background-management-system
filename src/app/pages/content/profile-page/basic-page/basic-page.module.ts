import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicPageComponent} from './basic-page.component';
import {BasicPageRoutingModule} from './basic-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BasicPageRoutingModule
  ],
  declarations: [BasicPageComponent]
})
export class BasicPageModule {
}
