import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrintingComponent} from './printing.component';
import {PrintingRoutingModule} from './printing-routing.module';
import {PrintingLeftHeadingsComponent} from './printing-left-headings/printing-left-headings.component';
import {SharingModule} from '../../../../sharing/sharing.module';
import {PrintingMiddleParagraphsComponent} from './printing-middle-paragraphs/printing-middle-paragraphs.component';
import {PrintingRightColorComponent} from './printing-right-color/printing-right-color.component';
import {PrintingLeftFormattingComponent} from './printing-left-formatting/printing-left-formatting.component';
import {PrintingMiddleBorderComponent} from './printing-middle-border/printing-middle-border.component';
import {PrintingRightPaddingAndMarginComponent} from './printing-right-padding-and-margin/printing-right-padding-and-margin.component';
import {PrintingLeftDisplayComponent} from './printing-left-display/printing-left-display.component';
import {PrintingMiddleCodeComponent} from './printing-middle-code/printing-middle-code.component';
import {PrintingRightListComponent} from './printing-right-list/printing-right-list.component';

@NgModule({
  imports: [
    CommonModule,
    PrintingRoutingModule,
    SharingModule
  ],
  declarations: [PrintingComponent, PrintingLeftHeadingsComponent, PrintingMiddleParagraphsComponent, PrintingRightColorComponent, PrintingLeftFormattingComponent, PrintingMiddleBorderComponent, PrintingRightPaddingAndMarginComponent, PrintingLeftDisplayComponent, PrintingMiddleCodeComponent, PrintingRightListComponent]
})
export class PrintingModule {
}
