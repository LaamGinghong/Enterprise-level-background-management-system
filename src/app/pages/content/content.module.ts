import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentComponent} from './content.component';
import {ContentRoutingModule} from './content-routing.module';
import {NzAvatarModule, NzBadgeModule, NzInputModule, NzLayoutModule} from 'ng-zorro-antd';
import { ContentPipe } from './content.pipe';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    NzLayoutModule,
    NzInputModule,
    NzBadgeModule,
    NzAvatarModule
  ],
  declarations: [ContentComponent, ContentPipe]
})
export class ContentModule {
}
