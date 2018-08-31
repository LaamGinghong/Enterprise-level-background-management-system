import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {SearchService} from '../../search.service';


@Directive({
  selector: '[appSearchContentContainer]'
})
export class SearchContentContainerDirective {
  subjectScroll = new Subject();
  @Input() lastCardItem: ElementRef;
  @Input() cardBox: Array<object>;
  @Output() cardBoxChange = new EventEmitter<Array<object>>();


  constructor(
    private searchService: SearchService
  ) {
    this.subjectScroll.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      if (value['srcElement'].scrollTop >= this.lastCardItem.nativeElement.offsetTop - 70) {
        for (let i = 0; i < 4; i++) {
          this.cardBox = this.cardBox.concat(this.searchService.box);
        }
        this.cardBoxChange.emit(this.cardBox);
      }
    });
  }

  @HostListener('scroll', ['$event'])
  onScroll(e: any) {
    this.subjectScroll.next(e);
  }

}
