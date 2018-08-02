import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasicListComponent} from './basic-list.component';

const routes: Routes = [{
  path: '',
  component: BasicListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BasicListRoutingModule {
}
