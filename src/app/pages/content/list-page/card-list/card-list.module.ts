import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardListComponent} from './card-list.component';
import {CardListRoutingModule} from './card-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CardListRoutingModule
  ],
  declarations: [CardListComponent]
})
export class CardListModule {
}
