import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './content.component';

const routes: Routes = [{
  path: '',
  component: ContentComponent,
  children: [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  }, {
    path: 'shortcut',
    loadChildren: './shortcut/shortcut.module#ShortcutModule'
  }, {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  }, {
    path: 'style',
    loadChildren: './style/style.module#StyleModule'
  }, {
    path: 'delon',
    loadChildren: './delon/delon.module#DelonModule'
  }, {
    path: 'formPage',
    loadChildren: './form-page/form-page.module#FormPageModule'
  }, {
    path: 'listPage',
    loadChildren: './list-page/list-page.module#ListPageModule'
  }, {
    path: 'profilePage',
    loadChildren: './profile-page/profile-page.module#ProfilePageModule'
  }, {
    path: 'resultPage',
    loadChildren: './result-page/result-page.module#ResultPageModule'
  }, {
    path: 'extras',
    loadChildren: './extras/extras.module#ExtrasModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContentRoutingModule {
}
