import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-monitor-dashboard',
  templateUrl: './monitor-dashboard.component.html',
  styleUrls: ['./monitor-dashboard.component.scss']
})

export class MonitorDashboardComponent implements OnInit, OnDestroy {
  option = {
    series: [
      {
        name: '业务指标',
        type: 'gauge',
        detail: {
          formatter: '{value}%',
          fontSize: 16,
          offsetCenter: [0, '50%'],
          fontWeight: 600
        },
        data: [{
          value: Number((Math.random() * 100).toFixed(2)),
          name: '完成率'
        }],
        axisLine: {
          lineStyle: {
            color: [[0.2, '#4D263A'], [0.4, '#91c7ae'], [0.6, '#B3B102'], [0.8, '#63869e'], [1, '#c23531']],
            width: 10
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          formatter: (params) => {
            switch (params) {
              case 0:
                return '神';
              case 20:
                return '渣';
              case 40:
                return '差';
              case 60:
                return '及格';
              case 80 :
                return '良';
              case 100 :
                return '优';
            }
          },
          distance: -15,
          fontSize: 14
        },
        pointer: {
          length: '50%',
          width: 8
        },
        title: {
          offsetCenter: [0, '30%'],
          fontSize: 16,
          fontWeight: 600
        }
      }
    ]
  };
  updateOption = {};
  clock: any;

  constructor() {
  }

  ngOnInit() {
    this.clock = setInterval(() => {
      this.updateOption = {
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: {
              formatter: '{value}%',
              fontSize: 16,
              offsetCenter: [0, '50%'],
              fontWeight: 600
            },
            data: [{
              value: Number((Math.random() * 100).toFixed(2)),
              name: '完成率'
            }],
            axisLine: {
              lineStyle: {
                color: [[0.2, '#4D263A'], [0.4, '#91c7ae'], [0.6, '#B3B102'], [0.8, '#63869e'], [1, '#c23531']],
                width: 10
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: (params) => {
                switch (params) {
                  case 0:
                    return '神';
                  case 20:
                    return '渣';
                  case 40:
                    return '差';
                  case 60:
                    return '及格';
                  case 80 :
                    return '良';
                  case 100 :
                    return '优';
                }
              },
              distance: -15,
              fontSize: 14
            },
            pointer: {
              length: '50%',
              width: 8
            },
            title: {
              offsetCenter: [0, '30%'],
              fontSize: 16,
              fontWeight: 600
            }
          }
        ]
      };
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.clock);
  }
}
