import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdvancedPageComponent} from './advanced-page.component';

const routes: Routes = [{
  path: '',
  component: AdvancedPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdvancedPageRoutingModule {
}
