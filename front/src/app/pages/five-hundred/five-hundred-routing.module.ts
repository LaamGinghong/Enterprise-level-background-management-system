import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FiveHundredComponent} from './five-hundred.component';

const routes: Routes = [{
  path: '',
  component: FiveHundredComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FiveHundredRoutingModule {
}
