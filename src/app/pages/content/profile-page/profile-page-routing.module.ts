import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfilePageComponent} from './profile-page.component';

const routes: Routes = [{
  path: '',
  component: ProfilePageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfilePageRoutingModule {
}
