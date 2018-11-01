import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPageComponent} from './list-page.component';
import {ListPageRoutingModule} from './list-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListPageRoutingModule
  ],
  declarations: [ListPageComponent]
})
export class ListPageModule {
}
