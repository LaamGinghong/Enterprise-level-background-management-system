import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchRoutingModule} from './search-routing.module';
import {SharingModule} from '../../../../sharing/sharing.module';
import {SearchContentComponent} from './search-content/search-content.component';
import {SearchContentContainerComponent} from './search-content/search-content-container/search-content-container.component';
import {SearchService} from './search.service';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharingModule
  ],
  declarations: [SearchComponent, SearchContentComponent, SearchContentContainerComponent],
  providers: [SearchService]
})
export class SearchModule {
}
