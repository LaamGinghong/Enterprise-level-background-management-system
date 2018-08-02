import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CacheComponent} from './cache.component';
import {CacheRoutingModule} from './cache-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CacheRoutingModule
  ],
  declarations: [CacheComponent]
})
export class CacheModule {
}
