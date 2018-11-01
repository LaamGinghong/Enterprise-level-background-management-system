import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CardListComponent} from './card-list.component';

const routes: Routes = [{
  path: '',
  component: CardListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CardListRoutingModule {
}
