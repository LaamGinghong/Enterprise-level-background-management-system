import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-advanced-tabs-card',
  templateUrl: './advanced-tabs-card.component.html',
  styleUrls: ['./advanced-tabs-card.component.scss']
})
export class AdvancedTabsCardComponent implements OnInit {
  tabs = ['操作日志一', '操作日志二', '操作日志三'];
  index = 0;
  tableData = [{
    type: 0,
    people: 0,
    result: 0,
    time: '2018-04-16 15:32:21',
    remark: '-'
  }, {
    type: 1,
    people: 1,
    result: 2,
    time: '2018-04-16 15:32:21',
    remark: '请重新申请'
  }, {
    type: 2,
    people: 2,
    result: 0,
    time: '2018-04-16 15:32:21',
    remark: '-'
  }, {
    type: 3,
    people: 3,
    result: 1,
    time: '2018-04-16 15:32:21',
    remark: '请于本周五前携本人身份证到行政处办理'
  }, {
    type: 4,
    people: 4,
    result: 0,
    time: '2018-04-16 15:32:21',
    remark: '-'
  }];
  defaultData = [];

  constructor() {
  }

  ngOnInit() {
    this.tableData.forEach(item => {
      this.defaultData.push(item);
    });
  }

  change(e: number): void {
    if (e) {
      if (e === 1) {
        const data = this.defaultData[0];
        this.tableData = [data];
      } else {
        const data = this.defaultData[this.defaultData.length - 1];
        this.tableData = [data];
      }
    } else {
      this.tableData = this.defaultData;
    }
  }
}
