import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-widgets-personal',
  templateUrl: './widgets-personal.component.html',
  styleUrls: ['./widgets-personal.component.scss']
})
export class WidgetsPersonalComponent implements OnInit {
  option = {
    xAxis: {
      type: 'category',
      show: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      barWidth: 5,
      itemStyle: {
        color: '#A8A8A8'
      }
    }]
  };
  name: string;
  data = [{
    name: 'Recent Activity',
    number: 350,
    color: 'blue'
  }, {
    name: 'Following',
    number: 150,
    color: 'red'
  }, {
    name: 'Photos',
    number: 100,
    color: 'green'
  }, {
    name: 'Article',
    number: 100,
    color: 'purple'
  }];

  constructor() {
  }

  ngOnInit() {
    this.initName();
  }

  initName(): void {
    if (document.cookie.indexOf('username') >= 0) {
      const cookies = document.cookie.split(';');
      cookies.forEach((item: string) => {
        if (item.indexOf('username') >= 0) {
          this.name = item.split('=')[1];
        }
      });
    }
  }
}
