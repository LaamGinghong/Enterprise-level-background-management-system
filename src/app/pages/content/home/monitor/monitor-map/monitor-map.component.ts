import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-monitor-map',
  templateUrl: './monitor-map.component.html',
  styleUrls: ['./monitor-map.component.scss']
})
export class MonitorMapComponent implements OnInit {
  allTurnover: number;
  allTurnoverString: string;
  percent: string;
  second = 30;
  secondString = '30';
  secondTurnover: number;
  secondTurnoverString: string;

  constructor() {
  }

  ngOnInit() {
    this.initMap();
    this.countDown();
  }

  initMap() {
    this.allTurnover = Math.round(Math.random() * 100000000000);
    this.allTurnoverString = this.allTurnover.toString(10).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.percent = (Math.random() * 100).toFixed(2);
    this.secondTurnover = Math.round(Math.random() * 1000000);
    this.secondTurnoverString = this.secondTurnover.toString(10).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  countDown() {
    const countDownSecond = setInterval(() => {
      if (this.second) {
        this.second--;
        this.secondString = this.second.toString(10);
        this.percent = (Number(this.percent) + Math.random()).toFixed(2);
        this.secondTurnover += Math.round(Math.random() * 1000000);
        this.secondTurnoverString = this.secondTurnover.toString(10).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        this.allTurnover += this.secondTurnover;
        this.allTurnoverString = this.allTurnover.toString(10).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (this.second < 10) {
          this.secondString = '0' + this.second;
        }
      } else {
        clearInterval(countDownSecond);
      }
    }, 1000);
  }
}
