import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'workPlace',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'analysis',
    loadChildren: './analysis/analysis.module#AnalysisModule'
  }, {
    path: 'monitor',
    loadChildren: './monitor/monitor.module#MonitorModule'
  }, {
    path: 'workPlace',
    loadChildren: './work-place/work-place.module#WorkPlaceModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {
}
