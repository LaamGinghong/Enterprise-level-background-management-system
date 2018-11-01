import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListPageComponent} from './list-page.component';

const routes: Routes = [{
  path: '',
  component: ListPageComponent,
  children: [{
    path: '',
    redirectTo: 'queryList',
    pathMatch: 'full'
  }, {
    path: 'queryList',
    loadChildren: './query-list/query-list.module#QueryListModule'
  }, {
    path: 'basicList',
    loadChildren: './basic-list/basic-list.module#BasicListModule'
  }, {
    path: 'cardList',
    loadChildren: './card-list/card-list.module#CardListModule'
  }, {
    path: 'searchList',
    loadChildren: './search-list/search-list.module#SearchListModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListPageRoutingModule {
}
