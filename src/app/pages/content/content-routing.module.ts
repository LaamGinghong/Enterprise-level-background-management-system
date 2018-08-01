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
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContentRoutingModule {
}
