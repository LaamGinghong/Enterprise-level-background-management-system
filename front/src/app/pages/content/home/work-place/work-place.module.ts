import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkPlaceComponent} from './work-place.component';
import {WorkPlaceRoutingModule} from './work-place-routing.module';
import {WorkPlaceTopComponent} from './work-place-top/work-place-top.component';
import {WorkPlaceBottomComponent} from './work-place-bottom/work-place-bottom.component';
import {WorkPlaceBottomLeftProjectComponent} from './work-place-bottom/work-place-bottom-left-project/work-place-bottom-left-project.component';
import {WorkPlaceBottomRightNavigationComponent} from './work-place-bottom/work-place-bottom-right-navigation/work-place-bottom-right-navigation.component';
import {WorkPlaceBottomLeftNewsComponent} from './work-place-bottom/work-place-bottom-left-news/work-place-bottom-left-news.component';
import {WorkPlaceBottomRightIndexComponent} from './work-place-bottom/work-place-bottom-right-index/work-place-bottom-right-index.component';
import {WorkPlaceBottomRightTeamComponent} from './work-place-bottom/work-place-bottom-right-team/work-place-bottom-right-team.component';
import {SharingModule} from '../../../../sharing/sharing.module';

@NgModule({
  imports: [
    CommonModule,
    WorkPlaceRoutingModule,
    SharingModule
  ],
  declarations: [WorkPlaceComponent, WorkPlaceTopComponent, WorkPlaceBottomComponent, WorkPlaceBottomLeftProjectComponent, WorkPlaceBottomRightNavigationComponent, WorkPlaceBottomLeftNewsComponent, WorkPlaceBottomRightIndexComponent, WorkPlaceBottomRightTeamComponent]
})
export class WorkPlaceModule {
}
