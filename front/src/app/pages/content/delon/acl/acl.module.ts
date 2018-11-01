import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AclComponent} from './acl.component';
import {AclRoutingModule} from './acl-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AclRoutingModule
  ],
  declarations: [AclComponent]
})
export class AclModule {
}
