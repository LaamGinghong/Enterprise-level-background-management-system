import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdvancedComponent} from './advanced.component';
import {AdvancedRoutingModule} from './advanced-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdvancedRoutingModule
  ],
  declarations: [AdvancedComponent]
})
export class AdvancedModule {
}
