import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableListComponent} from './table-list.component';
import {TableListRoutingModule} from './table-list-routing.module';
import {TableListTableComponent} from './table-list-table/table-list-table.component';
import {SharingModule} from '../../../../sharing/sharing.module';
import {TableListService} from './table-list.service';
import { ValueToTextPipe } from './table-list-table/value-to-text.pipe';
import { ValueToStatusPipe } from './table-list-table/value-to-status.pipe';

@NgModule({
  imports: [
    CommonModule,
    TableListRoutingModule,
    SharingModule
  ],
  declarations: [TableListComponent, TableListTableComponent, ValueToTextPipe, ValueToStatusPipe],
  providers: [TableListService]
})
export class TableListModule {
}
