import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExceptionComponent} from './exception.component';
import {ExceptionRoutingModule} from './exception.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExceptionRoutingModule
  ],
  declarations: [ExceptionComponent]
})
export class ExceptionModule {
}
