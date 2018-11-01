import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  tabs = ['文章', '应用', '全部'];

  constructor() {
  }

  ngOnInit() {
  }

}
