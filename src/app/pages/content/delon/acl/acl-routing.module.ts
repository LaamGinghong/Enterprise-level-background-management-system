import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AclComponent} from './acl.component';

const routes: Routes = [{
  path: '',
  component: AclComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AclRoutingModule {
}
