import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cardArray = [];
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
  messageArray = [{
    name: '苏先生',
    message: '请告诉我，我应该说点什么好？',
    url: '../../../../../assets/1.png'
  }, {
    name: 'はなさき',
    message: 'ハルカソラトキヘダツヒカリ',
    url: '../../../../../assets/2.png'
  }, {
    name: 'cipchk',
    message: 'this world was never meant for one as beautiful as you.',
    url: '../../../../../assets/3.png'
  }, {
    name: 'Kent',
    message: 'my heart is beating with hers',
    url: '../../../../../assets/4.png'
  }, {
    name: 'Are you',
    message: 'They always said that I love beautiful girl than my friends',
    url: '../../../../../assets/5.png'
  }, {
    name: 'Forever',
    message: 'Walking through green fields ，sunshine in my eyes.',
    url: '../../../../../assets/6.png'
  }];

  constructor() {
  }

  ngOnInit() {
    this.initCardArray();
    this.initBar();
    this.initLine();
  }

  initCardArray() {
    for (let i = 0; i < 10; i++) {
      const date = new Date();
      date.setTime(date.getTime() + i * 24 * 60 * 60 * 1000);
      const option = {
        number: Math.floor(Math.random() * 10),
        date: date.toLocaleDateString()
      };
      this.cardArray.push(option);
    }
  }

  initBar() {
    for (let i = 1; i < 13; i++) {
      this.barAbscissa.push(`${i}月`);
      this.barOrdinate.push(Math.floor(Math.random() * 1000));
    }
  }

  initLine() {
    for (let i = 0; i < 24; i++) {
      this.lineAbscissa.push(i < 10 ? `0${i}:00` : `${i}:00`);
      this.lineOrdinate1.push(Math.floor(Math.random() * 10));
      this.lineOrdinate2.push(Math.floor(Math.random() * 10));
    }
  }

  operateItem(mark: number, index: number, item: object) {
    if (mark) {
      this.messageArray.splice(index, 1);
    } else {
      item['isActive'] = !item['isActive'];
    }
    console.log(this.messageArray);
  }
}
