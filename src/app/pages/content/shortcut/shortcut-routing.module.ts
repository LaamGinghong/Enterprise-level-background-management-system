import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShortcutComponent} from './shortcut.component';

const routes: Routes = [{
  path: '',
  component: ShortcutComponent,
  children: [{
    path: 'typography',
    loadChildren: './typography/typography.module#TypographyModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShortcutRoutingModule {
}
