import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DownloadComponent} from './download.component';
import {DownloadRoutingModule} from './download-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DownloadRoutingModule
  ],
  declarations: [DownloadComponent]
})
export class DownloadModule {
}
