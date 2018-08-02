import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZipComponent} from './zip.component';
import {ZipRoutingModule} from './zip-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ZipRoutingModule
  ],
  declarations: [ZipComponent]
})
export class ZipModule {
}
