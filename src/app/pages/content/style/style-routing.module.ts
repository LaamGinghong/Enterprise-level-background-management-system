import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StyleComponent} from './style.component';

const routes: Routes = [{
  path: '',
  component: StyleComponent,
  children: [{
    path: '',
    redirectTo: 'typography',
    pathMatch: 'full'
  }, {
    path: 'typography',
    loadChildren: './typography/typography.module#TypographyModule'
  }, {
    path: 'gridMasonry',
    loadChildren: './grid-masonry/grid-masonry.module#GridMasonryModule'
  }, {
    path: 'colors',
    loadChildren: './colors/colors.module#ColorsModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StyleRoutingModule {
}
