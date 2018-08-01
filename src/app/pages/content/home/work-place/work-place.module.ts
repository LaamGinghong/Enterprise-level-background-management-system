import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkPlaceComponent} from './work-place.component';
import {WorkPlaceRoutingModule} from './work-place-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WorkPlaceRoutingModule
  ],
  declarations: [WorkPlaceComponent]
})
export class WorkPlaceModule {
}
