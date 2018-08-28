import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkPlaceComponent} from './work-place.component';
import {WorkPlaceRoutingModule} from './work-place-routing.module';
import {WorkPlaceTopComponent} from './work-place-top/work-place-top.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {WorkPlaceBottomComponent} from './work-place-bottom/work-place-bottom.component';
import {WorkPlaceBottomLeftProjectComponent} from './work-place-bottom/work-place-bottom-left-project/work-place-bottom-left-project.component';
import {WorkPlaceBottomRightNavigationComponent} from './work-place-bottom/work-place-bottom-right-navigation/work-place-bottom-right-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    WorkPlaceRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [WorkPlaceComponent, WorkPlaceTopComponent, WorkPlaceBottomComponent, WorkPlaceBottomLeftProjectComponent, WorkPlaceBottomRightNavigationComponent]
})
export class WorkPlaceModule {
}
