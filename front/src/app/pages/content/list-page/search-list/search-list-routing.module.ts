import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchListComponent} from './search-list.component';

const routes: Routes = [{
  path: '',
  component: SearchListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SearchListRoutingModule {
}
