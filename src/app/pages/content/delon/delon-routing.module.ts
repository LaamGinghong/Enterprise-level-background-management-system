import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DelonComponent} from './delon.component';

const routes: Routes = [{
  path: '',
  component: DelonComponent,
  children: [{
    path: '',
    redirectTo: 'pageName',
    pathMatch: 'full'
  }, {
    path: 'pageName',
    loadChildren: './page-name/page-name.module#PageNameModule'
  }, {
    path: 'fullScreenTable',
    loadChildren: './full-screen-table/full-screen-table.module#FullScreenTableModule'
  }, {
    path: 'util',
    loadChildren: './util/util.module#UtilModule'
  }, {
    path: 'print',
    loadChildren: './print/print.module#PrintModule'
  }, {
    path: 'QR',
    loadChildren: './qr/qr.module#QRModule'
  }, {
    path: 'ACL',
    loadChildren: './acl/acl.module#AclModule'
  }, {
    path: 'routeGuard',
    loadChildren: './route-guard/route-guard.module#RouteGuardModule'
  }, {
    path: 'cache',
    loadChildren: './cache/cache.module#CacheModule'
  }, {
    path: 'download',
    loadChildren: './download/download.module#DownloadModule'
  }, {
    path: 'excel',
    loadChildren: './excel/excel.module#ExcelModule'
  }, {
    path: 'zip',
    loadChildren: './zip/zip.module#ZipModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DelonRoutingModule {
}
