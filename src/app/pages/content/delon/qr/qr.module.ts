import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QRComponent} from './qr.component';
import {QrRoutingModule} from './qr-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QrRoutingModule
  ],
  declarations: [QRComponent]
})
export class QRModule {
}
