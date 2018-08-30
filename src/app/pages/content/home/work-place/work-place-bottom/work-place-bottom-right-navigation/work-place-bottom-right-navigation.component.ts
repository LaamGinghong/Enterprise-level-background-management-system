import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-place-bottom-right-navigation',
  templateUrl: './work-place-bottom-right-navigation.component.html',
  styleUrls: ['./work-place-bottom-right-navigation.component.scss']
})
export class WorkPlaceBottomRightNavigationComponent implements OnInit {
  actionBox = [];
  actionIndex = 1;

  constructor() {
  }

  ngOnInit() {
    this.initActionBox();
  }

  initActionBox(): void {
    for (this.actionIndex; this.actionIndex <= 10; this.actionIndex++) {
      this.actionBox.push(`操作${this.actionIndex}`);
    }
  }

  addAction(): void {
    this.actionBox.push(`操作${this.actionIndex}`);
    this.actionIndex++;
  }
}
