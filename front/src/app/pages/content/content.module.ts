import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentComponent} from './content.component';
import {ContentRoutingModule} from './content-routing.module';
import {ContentPipe} from './content.pipe';
import {HttpClientModule} from '@angular/common/http';
import {ContentService} from './content.service';
import {MobxAngularModule} from 'mobx-angular';
import {DataStoreService} from '../../store/dataStore.service';
import {SharingModule} from '../../sharing/sharing.module';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    HttpClientModule,
    MobxAngularModule,
    SharingModule
  ],
  declarations: [ContentComponent, ContentPipe],
  providers: [ContentService, DataStoreService]
})
export class ContentModule {
}
