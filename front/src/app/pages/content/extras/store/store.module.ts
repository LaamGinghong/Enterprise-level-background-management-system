import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store.component';
import {StoreRoutingModule} from './store-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  declarations: [StoreComponent]
})
export class StoreModule {
}
