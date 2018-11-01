import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FullScreenTableComponent} from './full-screen-table.component';

const routes: Routes = [{
  path: '',
  component: FullScreenTableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FullScreenTableRoutingModule {
}
