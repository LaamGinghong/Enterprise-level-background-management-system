import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfilePageComponent} from './profile-page.component';
import {ProfilePageRoutingModule} from './profile-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePageComponent]
})
export class ProfilePageModule {
}
