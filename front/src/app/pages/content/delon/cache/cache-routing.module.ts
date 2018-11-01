import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CacheComponent} from './cache.component';

const routes: Routes = [{
  path: '',
  component: CacheComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CacheRoutingModule {
}
