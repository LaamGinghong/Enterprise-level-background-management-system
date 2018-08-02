import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicListComponent} from './basic-list.component';
import {BasicListRoutingModule} from './basic-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BasicListRoutingModule
  ],
  declarations: [BasicListComponent]
})
export class BasicListModule {
}
