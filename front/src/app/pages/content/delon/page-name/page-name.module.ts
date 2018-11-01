import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNameRoutingModule} from './page-name-routing.module';
import {PageNameComponent} from './page-name.component';

@NgModule({
  imports: [
    CommonModule,
    PageNameRoutingModule
  ],
  declarations: [PageNameComponent]
})
export class PageNameModule {
}
