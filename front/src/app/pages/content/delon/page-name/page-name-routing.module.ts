import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNameComponent} from './page-name.component';

const routes: Routes = [{
  path: '',
  component: PageNameComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageNameRoutingModule {
}
