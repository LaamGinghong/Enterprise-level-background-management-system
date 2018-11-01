import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdvancedPageComponent} from './advanced-page.component';
import {AdvancedPageRoutingModule} from './advanced-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdvancedPageRoutingModule
  ],
  declarations: [AdvancedPageComponent]
})
export class AdvancedPageModule {
}
