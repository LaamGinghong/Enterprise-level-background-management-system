import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-analysis-bottom',
  templateUrl: './analysis-bottom.component.html',
  styleUrls: ['./analysis-bottom.component.scss']
})
export class AnalysisBottomComponent implements OnInit {
  tabArray = [];
  lineAbscissa = [];
  lineOrdinate1 = [];
  lineOrdinate2 = [];
  lineChart = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['支付笔数', '客流量']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.lineAbscissa
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '支付笔数',
        type: 'line',
        data: this.lineOrdinate1
      }, {
        name: '客流量',
        type: 'line',
        data: this.lineOrdinate2
      }],
    dataZoom: {
      type: 'slider',
      start: 20,
      end: 60
    }
  };

  constructor() {
  }

  ngOnInit() {
    this.initTabArray();
    this.initLine();
  }

  initTabArray() {
    for (let i = 1; i <= 10; i++) {
      const math = (i * Math.random() * 10);
      const option = {
        name: `第${i}号门店`,
        percent: `${math.toFixed(2)}%`,
        pie: {
          series: [
            {
              type: 'pie',
              radius: ['30%', '90%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: math},
                {value: 100 - math},
              ],
              hoverAnimation: false
            }
          ],
          color: ['#1890FF', '#cccccc']
        }
      };
      this.tabArray.push(option);
    }
  }

  initLine() {
    for (let i = 0; i <= 29; i++) {
      const now = new Date();
      now.setTime(now.getTime() + i * 24 * 60 * 60 * 1000);
      this.lineAbscissa.push(now.toLocaleDateString().split('/').join('-'));
      this.lineOrdinate1.push(Math.round(Math.random() * 1000));
      this.lineOrdinate2.push(Math.round(Math.random() * 1000));
    }
  }
}
