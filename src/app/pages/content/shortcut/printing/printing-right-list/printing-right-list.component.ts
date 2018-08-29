import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-printing-right-list',
  templateUrl: './printing-right-list.component.html',
  styleUrls: ['./printing-right-list.component.scss']
})
export class PrintingRightListComponent implements OnInit {
  listBox = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.listBox.push('List Item');
    }
  }
}
