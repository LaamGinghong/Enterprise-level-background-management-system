import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { ContentPipe } from './content.pipe';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { ContentService } from './content.service';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    NgZorroAntdModule,
    HttpClientModule
  ],
  declarations: [ContentComponent, ContentPipe],
  providers: [ContentService]
})
export class ContentModule {
}
