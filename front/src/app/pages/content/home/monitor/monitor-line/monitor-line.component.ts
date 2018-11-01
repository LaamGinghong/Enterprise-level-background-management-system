import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-monitor-line',
  templateUrl: './monitor-line.component.html',
  styleUrls: ['./monitor-line.component.scss']
})

export class MonitorLineComponent implements OnInit, OnDestroy {
  abscissa = [];
  ordinate = [];
  option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.abscissa,
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      data: this.ordinate,
      type: 'line',
      areaStyle: {
        opacity: '0.3'
      },
      smooth: true
    }],
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      }
    },
    color: ['#1890ff']
  };
  updateOption = {};
  average: number;
  variance: number;
  word: string;
  clock: any;

  constructor() {
  }

  ngOnInit() {
    this.initAxis();
    this.updateOrdinate();
  }

  ngOnDestroy() {
    clearInterval(this.clock);
  }

  initAxis(): void {
    for (let i = 0; i < 24; i++) {
      this.abscissa.push(i < 10 ? `0${i}:00` : `${i}:00`);
      this.ordinate.push(Math.round(Math.random() * 2000));
    }
    let num = 0;
    this.ordinate.forEach(item => {
      num += item;
    });
    this.average = Number((num / this.ordinate.length).toFixed(2));
    num = 0;
    this.ordinate.forEach(item => {
      num += Math.pow((item - this.average), 2);
    });
    this.variance = Number((num / this.ordinate.length).toFixed(2));
    this.word = this.variance > 50000 ? '活动情况十分不稳定' : '活动情况十分稳定';
  }

  updateOrdinate(): void {
    this.clock = setInterval(() => {
      this.ordinate.shift();
      this.ordinate.push(Math.round(Math.random() * 2000));
      this.updateOption = {
        series: [{
          data: this.ordinate,
          type: 'line',
          areaStyle: {
            opacity: '0.3'
          },
          smooth: true
        }]
      };
      let num = 0;
      this.ordinate.forEach(item => {
        num += item;
      });
      this.average = Number((num / this.ordinate.length).toFixed(2));
      num = 0;
      this.ordinate.forEach(item => {
        num += Math.pow((item - this.average), 2);
      });
      this.variance = Number((num / this.ordinate.length).toFixed(2));
      this.word = this.variance > 300000 ? '活动情况十分不稳定' : '活动情况十分稳定';
    }, 1000);
  }
}
