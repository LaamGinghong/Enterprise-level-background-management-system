import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NgxEchartsModule} from 'ngx-echarts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgZorroAntdModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharingModule {
}
