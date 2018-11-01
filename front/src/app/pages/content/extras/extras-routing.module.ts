import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExtrasComponent} from './extras.component';

const routes: Routes = [{
  path: '',
  component: ExtrasComponent,
  children: [{
    path: '',
    redirectTo: 'helpCenter',
    pathMatch: 'full'
  }, {
    path: 'helpCenter',
    loadChildren: './help-center/help-center.module#HelpCenterModule'
  }, {
    path: 'setting',
    loadChildren: './setting/setting.module#SettingModule'
  }, {
    path: 'store',
    loadChildren: './store/store.module#StoreModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExtrasRoutingModule {
}
