import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingComponent} from './setting.component';
import {SettingRoutingModule} from './setting-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule
  ],
  declarations: [SettingComponent]
})
export class SettingModule {
}
