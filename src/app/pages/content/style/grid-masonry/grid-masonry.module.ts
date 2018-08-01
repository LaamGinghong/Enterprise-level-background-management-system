import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridMasonryComponent} from './grid-masonry.component';
import {GridMasonryRoutingModule} from './grid-masonry-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GridMasonryRoutingModule
  ],
  declarations: [GridMasonryComponent]
})
export class GridMasonryModule {
}
