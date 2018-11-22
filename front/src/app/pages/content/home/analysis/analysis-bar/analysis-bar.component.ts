import {Component, OnInit} from '@angular/core';
import * as endOfWeek from 'date-fns/end_of_week';
import * as endOfMonth from 'date-fns/end_of_month';
import * as endOfYear from 'date-fns/end_of_year';
import {AnalysisService} from '../analysis.service';

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
  option = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value',
    },
    series: [],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    color: ['#1890FF']
  };
  merge: object;
  tableData = [];

  constructor(
    private analysisService: AnalysisService
  ) {
  }

  ngOnInit() {
    this.initChart();
    this.initTable();
  }

  initChart(type: number = 0): void {
    this.analysisService
      .getSaleOrVolume({type})
      .subscribe((result: {
        success: boolean,
        message: Array<{ month: string, value: number }>
      }) => {
        if (result.success) {
          this.option.xAxis.data = result.message.map((item: { month: string }) => {
            return item.month;
          });
          this.option.series = [{
            type: 'bar',
            data: result.message.map((item: { value: number }) => {
              return item.value;
            })
          }];
          this.merge = this.option;
        }
      });
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
