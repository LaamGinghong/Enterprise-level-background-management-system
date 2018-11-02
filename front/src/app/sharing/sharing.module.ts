import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NgxEchartsModule} from 'ngx-echarts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharingService} from './sharing.service';

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
  declarations: [],
  providers: [SharingService]
})
export class SharingModule {
}
