import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableListComponent} from './table-list.component';
import {TableListRoutingModule} from './table-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TableListRoutingModule
  ],
  declarations: [TableListComponent]
})
export class TableListModule {
}
