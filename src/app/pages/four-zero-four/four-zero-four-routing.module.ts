import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FourZeroFourComponent} from './four-zero-four.component';

const routes: Routes = [{
  path: '',
  component: FourZeroFourComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FourZeroFourRoutingModule {
}
