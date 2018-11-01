import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit {
  subject = [
    {
      id: 0,
      text: '全部',
      checked: false
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.initSubject();
  }

  initSubject() {
    for (let i = 1; i < 6; i++) {
      this.subject.push({
        id: i,
        text: `类目${i}`,
        checked: false
      });
    }
  }

  checkItem(index: number, e: boolean) {
    if (!index) {
      this.subject.forEach((item: { id: number, text: string, checked: boolean }) => {
        item.checked = e;
      });
    }
  }
}
