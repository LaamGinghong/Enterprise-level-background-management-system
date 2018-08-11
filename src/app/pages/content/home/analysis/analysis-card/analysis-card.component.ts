import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-analysis-card',
  templateUrl: './analysis-card.component.html',
  styleUrls: ['./analysis-card.component.scss']
})
export class AnalysisCardComponent implements OnInit {
  abscissa = [];
  ordinate = [];
  lineChart = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.abscissa,
      show: false
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      data: this.ordinate,
      type: 'line',
      smooth: true,
      areaStyle: {}
    }],
    tooltip: {
      trigger: 'axis'
    },
    dataZoom: {
      type: 'inside'
    },
    color:['#975FE4']
  };

  barChart = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.abscissa,
      show: false
    },
    yAxis: {
      type: 'value',
      show: false
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
    dataZoom: {
      type: 'inside'
    }
  };

  constructor() {
  }

  ngOnInit() {
    this.initAbscissa();
    this.initOrdinate();
  }

  initAbscissa() {
    for (let i = 0; i < 30; i++) {
      const now = new Date();
      now.setTime(now.getTime() + i * 24 * 60 * 60 * 1000);
      this.abscissa.push(now.toLocaleDateString().split('/').join('-'));
    }
  }

  initOrdinate() {
    for (let i = 0; i < 30; i++) {
      this.ordinate.push(Math.round(Math.random() * 10));
    }
  }
}
