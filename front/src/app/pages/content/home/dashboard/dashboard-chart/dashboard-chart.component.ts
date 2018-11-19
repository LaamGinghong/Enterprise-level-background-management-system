import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent implements OnInit {
  barOption = {
    xAxis: [
      {
        type: 'category',
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
      top: '2%'
    },
    yAxis: [
      {
        type: 'value',
      }
    ],
    series: [],
    color: ['#58AFFF']
  };
  barMerge: object;

  constructor(
    private dashboardService: DashboardService
  ) {
  }

  ngOnInit() {
    this.initBar();
    this.initLine();
  }

  initBar(): void {
    this.dashboardService.getDashboardArticle().subscribe((result: { success: boolean, message: Array<{ value: Array<object>, name: string }> }) => {
      if (result.success) {
        this.barOption.legend['data'] = result.message.map((item: { name }) => {
          return item.name;
        });
        const barAbscissa = result.message[0].value.map((value: { month: string }) => {
          return value.month;
        });
        this.barOption.xAxis.forEach((item: object) => {
          item['data'] = barAbscissa;
        });
        const series = [];
        result.message.forEach((item: { name: string, value: Array<object> }) => {
          const option = {
            name: item.name,
            type: 'bar',
            data: item.value.map((value: { value: number }) => {
              return value.value;
            }),
            barWidth: '60%'
          };
          series.push(option);
        });
        this.barOption.series = series;
        this.barMerge = this.barOption;
      }
    });
  }

  initLine(): void {
  }
}
