import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QueryListComponent} from './query-list.component';
import {QueryListRoutingModule} from './query-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QueryListRoutingModule
  ],
  declarations: [QueryListComponent]
})
export class QueryListModule {
}
