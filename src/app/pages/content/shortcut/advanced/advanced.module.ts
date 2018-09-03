import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdvancedComponent} from './advanced.component';
import {AdvancedRoutingModule} from './advanced-routing.module';
import {SharingModule} from '../../../../sharing/sharing.module';
import {AdvancedStepComponent} from './advanced-step/advanced-step.component';
import {AdvancedUserMessageComponent} from './advanced-user-message/advanced-user-message.component';
import {AdvancedPhoneHistoryComponent} from './advanced-phone-history/advanced-phone-history.component';
import { AdvancedTabsCardComponent } from './advanced-tabs-card/advanced-tabs-card.component';
import { AdvancedTabsCardTypePipe } from './advanced-tabs-card/advanced-tabs-card-type.pipe';
import { AdvancedTabsCardPeoplePipe } from './advanced-tabs-card/advanced-tabs-card-people.pipe';
import { AdvancedTabsCardStatusPipe } from './advanced-tabs-card/advanced-tabs-card-status.pipe';
import { AdvancedTabsCardResultPipe } from './advanced-tabs-card/advanced-tabs-card-result.pipe';

@NgModule({
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    SharingModule
  ],
  declarations: [AdvancedComponent, AdvancedStepComponent, AdvancedUserMessageComponent, AdvancedPhoneHistoryComponent, AdvancedTabsCardComponent, AdvancedTabsCardTypePipe, AdvancedTabsCardPeoplePipe, AdvancedTabsCardStatusPipe, AdvancedTabsCardResultPipe]
})
export class AdvancedModule {
}
