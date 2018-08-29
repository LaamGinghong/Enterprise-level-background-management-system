import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  exports: [
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  declarations: []
})
export class SharingModule {
}
