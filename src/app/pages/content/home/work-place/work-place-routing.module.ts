import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkPlaceComponent} from './work-place.component';

const routes: Routes = [{
  path: '',
  component: WorkPlaceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WorkPlaceRoutingModule {
}
