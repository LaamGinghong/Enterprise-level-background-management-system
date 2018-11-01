import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasicPageComponent} from './basic-page.component';

const routes: Routes = [{
  path: '',
  component: BasicPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BasicPageRoutingModule {
}
