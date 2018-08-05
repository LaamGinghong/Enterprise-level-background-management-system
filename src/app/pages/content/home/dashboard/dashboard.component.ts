import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardArray = [];

  constructor(
  ) { }

  ngOnInit() {
    this.initCardArray();
  }

  initCardArray() {
    for (let i = 0; i < 10; i++) {
      const date = new Date();
      date.setTime(date.getTime() + i * 24 * 60 * 60 * 1000);
      const option = {
        number: Math.floor(Math.random() * 10),
        date: date.toLocaleDateString()
      };
      this.cardArray.push(option);
    }
    console.log(this.cardArray);
  }
}
