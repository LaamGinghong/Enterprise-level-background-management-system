import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypographyComponent} from './typography.component';
import {TypographyRoutingModule} from './typography-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TypographyRoutingModule
  ],
  declarations: [TypographyComponent]
})
export class TypographyModule {
}
