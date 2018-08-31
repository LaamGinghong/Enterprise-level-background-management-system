import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {SearchService} from '../../search.service';

@Component({
  selector: 'app-search-content-container',
  templateUrl: './search-content-container.component.html',
  styleUrls: ['./search-content-container.component.scss']
})
export class SearchContentContainerComponent implements OnInit, AfterViewInit {
  cardBox: Array<object>;
  @ViewChild('cardContainer') cardContainer: ElementRef;
  @ViewChildren('cardItem') cardItem: QueryList<object>;
  lastCardItem: object;

  constructor(
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
    this.cardBox = this.searchService.initBox();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initCard();
    });
  }

  initCard() {
    this.lastCardItem = this.cardItem.last;
  }
}
