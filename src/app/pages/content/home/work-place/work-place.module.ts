import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkPlaceComponent} from './work-place.component';
import {WorkPlaceRoutingModule} from './work-place-routing.module';
import {WorkPlaceTopComponent} from './work-place-top/work-place-top.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    WorkPlaceRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [WorkPlaceComponent, WorkPlaceTopComponent]
})
export class WorkPlaceModule {
}
