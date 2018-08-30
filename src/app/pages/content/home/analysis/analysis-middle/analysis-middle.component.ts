import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-analysis-middle',
  templateUrl: './analysis-middle.component.html',
  styleUrls: ['./analysis-middle.component.scss']
})
export class AnalysisMiddleComponent implements OnInit {
  abscissa = [];
  ordinate1 = [];
  ordinate2 = [];
  line1 = {
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
      data: this.ordinate1,
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
    color: ['#F290D3']
  };
  line2 = {
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
      data: this.ordinate2,
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
    color: ['#F290D3']
  };
  tableData = [];
  tableDisplayData1 = [];
  tableDisplayData2 = [];
  tableDefault = [];
  pieAbscissa = ['家用电器', '食用酒水', '个护健康', '服饰箱包', '母婴产品', '其他'];
  pie1 = [];
  pie2 = [];
  pie3 = [];
  updatePieOption = {};
  pieOption = {
    title: {
      text: '销售额'
    },
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const str = `
        <h3 style="color: white">${params.seriesName}</h3>
        <div>
          <span style="display: inline-block;background: ${params.color};width: 10px;height: 10px;border-radius: 50%"></span>
          <span>${params.value}</span>
          <span>(${params.percent}%)</span>
        </div>
        `;
        return str;
      }
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      data: this.pieAbscissa
    },
    series: [
      {
        name: '销售额',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: this.pie1
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
    this.initLine();
    this.initTable();
    this.initPie();
  }

  initLine(): void {
    for (let i = 0; i < 30; i++) {
      const now = new Date();
      now.setTime(now.getTime() + i * 24 * 60 * 60 * 1000);
      this.abscissa.push(now.toLocaleDateString().split('/').join('-'));
      this.ordinate1.push(Math.round(Math.random() * 20));
      this.ordinate2.push(Math.round(Math.random() * 20));
    }
  }

  initTable(): void {
    for (let i = 1; i <= 50; i++) {
      const option = {
        name: `搜索关键词-${i}`,
        number: Math.round(Math.random() * 1000),
        percent: Math.round(Math.random() * 100),
        icon: i % 2 === 0 ? 'anticon anticon-caret-up' : 'anticon anticon-caret-down',
        isUp: i % 2 === 0
      };
      this.tableData.push(option);
      this.tableDisplayData1 = [...this.tableData];
      this.tableDisplayData2 = [...this.tableData];
      this.tableDefault = [...this.tableData];
    }
  }

  initPie(): void {
    let name = '';
    for (let i = 0; i < 6; i++) {
      switch (i) {
        case 0:
          name = '家用电器';
          break;
        case 1:
          name = '食用酒水';
          break;
        case 2:
          name = '个护健康';
          break;
        case 3:
          name = '服饰箱包';
          break;
        case 4:
          name = '母婴产品';
          break;
        case 5:
          name = '其他';
          break;
      }
      this.pie1.push({value: Math.round(Math.random() * 10000), name: name});
      this.pie2.push({value: Math.round(Math.random() * 10000), name: name});
      this.pie3.push({value: Math.round(Math.random() * 10000), name: name});

    }
  }

  sortTable(e: { key: string, value?: string }): void {
    const des = this.getSort(e.key, e.value);
    const asc = this.getSort(e.key, e.value);
    switch (e.key) {
      case 'number':
        if (e.value) {
          switch (e.value) {
            case 'descend':
              this.tableData = des;
              break;
            case 'ascend':
              this.tableData = asc;
              break;
          }
        } else {
          this.tableData = this.tableDefault;
        }
        break;
      case 'percent':
        if (e.value) {
          switch (e.value) {
            case 'descend':
              this.tableData = des;
              break;
            case 'ascend':
              this.tableData = asc;
              break;
          }
        } else {
          this.tableData = this.tableDefault;
        }
        break;
    }
  }

  getSort(key: string, type?: string): any {
    if (type === 'descend') {
      return this.tableDisplayData1.sort((a: number, b: number) => {
        return b[key] - a[key];
      });
    }
    if (type === 'ascend') {
      return this.tableDisplayData2.sort((a: number, b: number) => {
        return a[key] - b[key];
      });
    }
  }

  changePie(mark: number): void {
    switch (mark) {
      case 1:
        this.updatePieOption = {
          series: [{
            data: this.pie1
          }]
        };
        break;
      case 2:
        this.updatePieOption = {
          series: [{
            data: this.pie2
          }]
        };
        break;
      case 3:
        this.updatePieOption = {
          series: [{
            data: this.pie3
          }]
        };
        break;
    }
    this.pieOption = Object.assign({}, this.pieOption);
  }
}
