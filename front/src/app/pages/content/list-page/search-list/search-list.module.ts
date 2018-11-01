import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchListComponent} from './search-list.component';
import {SearchListRoutingModule} from './search-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SearchListRoutingModule
  ],
  declarations: [SearchListComponent]
})
export class SearchListModule {
}
