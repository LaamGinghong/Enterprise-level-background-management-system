import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {
  cardArray = [];

  constructor() {
  }

  ngOnInit() {
    this.initCardArray();
  }

  initCardArray() {
    for (let i = 0; i < 10; i++) {
      const date = new Date();
      date.setTime(date.getTime() + i * 24 * 60 * 60 * 1000);
      const option = {
        number: Math.round(Math.random() * 10),
        date: date.toLocaleDateString()
      };
      this.cardArray.push(option);
    }
  }
}
