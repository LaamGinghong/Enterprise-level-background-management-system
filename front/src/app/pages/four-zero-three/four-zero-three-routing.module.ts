import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FourZeroThreeComponent} from './four-zero-three.component';

const routes: Routes = [{
  path: '',
  component: FourZeroThreeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FourZeroThreeRoutingModule {
}
