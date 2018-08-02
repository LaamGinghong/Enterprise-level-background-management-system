import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QueryListComponent} from './query-list.component';

const routes: Routes = [{
  path: '',
  component: QueryListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QueryListRoutingModule {
}
