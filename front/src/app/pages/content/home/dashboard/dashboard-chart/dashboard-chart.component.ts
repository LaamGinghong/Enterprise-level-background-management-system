import {Component, OnInit, Renderer2} from '@angular/core';
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

  lineOption = {
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
        type: 'line'
      }
    },
    legend: {
      top: '2%'
    },
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [],
    dataZoom: [
      {
        filterMode: 'filter',
        start: 40,
        end: 70
      }]
  };
  lineMerge: object;

  constructor(
    private dashboardService: DashboardService,
    private renderer2: Renderer2
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
        const barAbscissa = result.message[0].value.map((item: { month: string }) => {
          return item.month;
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
    this.dashboardService.getDashboardRidership().subscribe((result: { success: boolean, message: Array<{ name: string, value: Array<object> }> }) => {
      if (result.success) {
        this.lineOption.legend['data'] = result.message.map((item: { name }) => {
          return item.name;
        });
        const lineAbscissa = result.message[0].value.map((item: { time: string }) => {
          return item.time;
        });
        this.lineOption.xAxis.forEach((item: object) => {
          item['data'] = lineAbscissa;
        });
        const series = [];
        result.message.forEach((item: { name: string, value: Array<object> }) => {
          const option = {
            name: item.name,
            type: 'line',
            data: item.value.map((value: { value: number }) => {
              return value.value;
            })
          };
          series.push(option);
        });
        this.lineOption.series = series;
        this.lineMerge = this.lineOption;
        this.initTodo();
      }
    });
  }


  initTodo(): void {
    setTimeout(() => {
      const top = this.dashboardService.chatBox.nativeElement.offsetTop + this.dashboardService.chatBox.nativeElement.childNodes[0].offsetHeight;
      const left = this.dashboardService.chatBox.nativeElement.offsetLeft;
      this.renderer2.setStyle(this.dashboardService.todo.nativeElement, 'top', `${top}px`);
      this.renderer2.setStyle(this.dashboardService.todo.nativeElement, 'left', `${left}px`);
    });
  }
}
