import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShortcutComponent} from './shortcut.component';
import {ShortcutRoutingModule} from './shortcut-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShortcutRoutingModule
  ],
  declarations: [ShortcutComponent]
})
export class ShortcutModule {
}
