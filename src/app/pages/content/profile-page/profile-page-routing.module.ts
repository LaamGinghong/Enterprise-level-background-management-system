import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfilePageComponent} from './profile-page.component';

const routes: Routes = [{
  path: '',
  component: ProfilePageComponent,
  children: [{
    path: '',
    redirectTo: 'basicPage',
    pathMatch: 'full'
  }, {
    path: 'basicPage',
    loadChildren: './basic-page/basic-page.module#BasicPageModule'
  }, {
    path: 'advancedPage',
    loadChildren: './advanced-page/advanced-page.module#AdvancedPageModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfilePageRoutingModule {
}
