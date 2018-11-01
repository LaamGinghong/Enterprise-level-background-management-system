import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FullScreenTableComponent} from './full-screen-table.component';
import {FullScreenTableRoutingModule} from './full-screen-table-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FullScreenTableRoutingModule
  ],
  declarations: [FullScreenTableComponent]
})
export class FullScreenTableModule {
}
