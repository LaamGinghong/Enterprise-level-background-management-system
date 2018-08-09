import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent implements OnInit {
  barAbscissa = []; //柱状图横坐标
  barOrdinate = []; //柱状图纵坐标
  lineAbscissa = []; //折线图横坐标
  lineOrdinate1 = []; //折线图纵坐标1
  lineOrdinate2 = []; //折线图纵坐标2
  barChart = {
    xAxis: [
      {
        type: 'category',
        data: this.barAbscissa,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['文章数量'],
      top: '2%'
    },
    yAxis: [
      {
        type: 'value',
      }
    ],
    series: [{
      name: '文章数量',
      type: 'bar',
      data: this.barOrdinate,
      barWidth: '60%'
    }],
    color: ['#58AFFF']
  };
  lineChart = {
    xAxis: [
      {
        type: 'category',
        data: this.lineAbscissa,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      }
    },
    legend: {
      data: ['客流量', '支付笔数'],
      top: '2%'
    },
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [{
      name: '客流量',
      data: this.lineOrdinate1,
      type: 'line'
    }, {
      name: '支付笔数',
      data: this.lineOrdinate2,
      type: 'line'
    }],
    dataZoom: [
      {
        filterMode: 'filter',
        start: 40,
        end: 70
      }]
  };

  constructor() {
  }

  ngOnInit() {
    this.initBar();
    this.initLine();
  }

  initBar() {
    for (let i = 1; i < 13; i++) {
      this.barAbscissa.push(`${i}月`);
      this.barOrdinate.push(Math.round(Math.random() * 1000));
    }
  }

  initLine() {
    for (let i = 0; i < 24; i++) {
      this.lineAbscissa.push(i < 10 ? `0${i}:00` : `${i}:00`);
      this.lineOrdinate1.push(Math.round(Math.random() * 10));
      this.lineOrdinate2.push(Math.round(Math.random() * 10));
    }
  }
}
