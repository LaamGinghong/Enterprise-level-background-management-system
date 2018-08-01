import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GridMasonryComponent} from './grid-masonry.component';

const routes: Routes = [{
  path: '',
  component: GridMasonryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GridMasonryRoutingModule {
}
