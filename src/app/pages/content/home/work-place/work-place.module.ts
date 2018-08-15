import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkPlaceComponent} from './work-place.component';
import {WorkPlaceRoutingModule} from './work-place-routing.module';
import {WorkPlaceTopComponent} from './work-place-top/work-place-top.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {WorkPlaceBottomComponent} from './work-place-bottom/work-place-bottom.component';
import {WorkPlaceBottomLeftComponent} from './work-place-bottom/work-place-bottom-left/work-place-bottom-left.component';
import {WorkPlaceBottomRightComponent} from './work-place-bottom/work-place-bottom-right/work-place-bottom-right.component';

@NgModule({
  imports: [
    CommonModule,
    WorkPlaceRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [WorkPlaceComponent, WorkPlaceTopComponent, WorkPlaceBottomComponent, WorkPlaceBottomLeftComponent, WorkPlaceBottomRightComponent]
})
export class WorkPlaceModule {
}
