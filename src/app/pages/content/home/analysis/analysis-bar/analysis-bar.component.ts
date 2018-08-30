import {Component, OnInit} from '@angular/core';
import * as endOfWeek from 'date-fns/end_of_week';
import * as endOfMonth from 'date-fns/end_of_month';
import * as endOfYear from 'date-fns/end_of_year';

@Component({
  selector: 'app-analysis-bar',
  templateUrl: './analysis-bar.component.html',
  styleUrls: ['./analysis-bar.component.scss']
})
export class AnalysisBarComponent implements OnInit {
  tabs = ['销售额', '访问量'];
  ranges = {
    '今天': [new Date(), new Date()],
    '本周': [new Date(), endOfWeek(new Date())],
    '本月': [new Date(), endOfMonth(new Date())],
    '本年': [new Date(), endOfYear(new Date())]
  };
  abscissa = [];
  ordinate = [];
  option = {
    xAxis: {
      type: 'category',
      data: this.abscissa,
    },
    yAxis: {
      type: 'value',
    },
    series: [{
      data: this.ordinate,
      type: 'bar'
    }],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    color: ['#1890FF']
  };
  tableData = [];

  constructor() {
  }

  ngOnInit() {
    this.initChart();
    this.initTable();
  }

  initChart(): void {
    for (let i = 1; i <= 12; i++) {
      this.abscissa.push(`${i}月`);
      this.ordinate.push(Math.round(Math.random() * 2000));
    }
  }

  initTable(): void {
    for (let i = 1; i <= 7; i++) {
      const number = Math.round(Math.random() * 20000);
      const item = {
        id: i,
        number: number,
        numberString: number.toString(10).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      };
      this.tableData.push(item);
    }
    this.tableData.sort(function (a: number, b: number) {
      return b['number'] - a['number'];
    });
  }
}
