import {Component, OnInit} from '@angular/core';
import {TableListService} from '../table-list.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-table-list-table',
  templateUrl: './table-list-table.component.html',
  styleUrls: ['./table-list-table.component.scss']
})
export class TableListTableComponent implements OnInit {
  option = {
    orderId: null,
    status: null,
    number: null,
    date: null
  };
  statusBox = [{
    value: 1,
    text: '关闭'
  }, {
    value: 2,
    text: '运行中'
  }, {
    value: 3,
    text: '已上线'
  }, {
    value: 4,
    text: '异常'
  }];
  tableData: Array<object>;
  defaultData = [];
  pageIndex = 1;
  loadingStatus = false;
  isVisible = false;
  addDescription: string;
  allChecked = false;
  indeterminate = false;
  checkNum = 0;
  checkMoney = 0;

  constructor(
    private tableListService: TableListService,
    private message: NzMessageService
  ) {
  }

  ngOnInit() {
    this.initTableData();
  }

  initTableData() {
    this.tableData = this.tableListService.initTableData();
    this.tableData.forEach(item => {
      this.defaultData.push(item);
    });
  }

  sort(e: { key: string, value: string }) {
    if (e.value) {
      const sortTableData = [];
      this.tableData.forEach(item => {
        sortTableData.push(item);
      });
      if (e.value === 'ascend') {
        if (e.key === 'number') {
          sortTableData.sort((a: object, b: object) => {
            return a[e.key] - b[e.key];
          });
        } else {
          sortTableData.sort((a: object, b: object) => {
            return a[e.key].getTime() - b[e.key].getTime();
          });
        }

      } else {
        if (e.key === 'number') {
          sortTableData.sort((a: object, b: object) => {
            return b[e.key] - a[e.key];
          });
        } else {
          sortTableData.sort((a: object, b: object) => {
            return b[e.key].getTime() - a[e.key].getTime();
          });
        }
      }
      this.tableData = sortTableData;
    } else {
      this.tableData = this.defaultData;
    }
    this.pageIndex = 1;
  }

  filter(e: number | object) {
    if (e) {
      const filterTableData = [];
      this.defaultData.forEach(item => {
        if (item['status'] === e) {
          filterTableData.push(item);
        }
      });
      this.tableData = filterTableData;
    } else {
      this.tableData = this.defaultData;
    }
    this.pageIndex = 1;
  }

  action(type: string) {
    this.message.success(type, {nzDuration: 2000});
  }

  search() {
    this.loadingStatus = true;
    setTimeout(() => {
      this.loadingStatus = false;
    }, 2000);
  }

  reset() {
    for (let i in this.option) {
      if (this.option.hasOwnProperty(i)) {
        this.option[i] = null;
      }
    }
  }

  handleOk() {
    if (this.addDescription) {
      this.defaultData.unshift({
        orderId: `TradeCode${this.defaultData.length}`,
        description: this.addDescription,
        number: Math.round(Math.random() * 1000),
        status: Math.ceil(Math.random() * 4),
        time: new Date(),
        timeString: `${new Date().getFullYear()}-${new Date().getMonth() > 9 ? new Date().getMonth() : `0${new Date().getMonth()}`}-${new Date().getDate() > 9 ? new Date().getDate() : `0${new Date().getDate()}`} ${new Date().getHours() > 9 ? new Date().getHours() : `0${new Date().getHours()}`}:${new Date().getMinutes() > 9 ? new Date().getMinutes() : `0${new Date().getMinutes()}`}:${new Date().getSeconds() > 9 ? new Date().getSeconds() : `0${new Date().getSeconds()}`}`
      });
      this.tableData = this.defaultData;
      this.isVisible = false;
      this.message.success('添加成功！', {nzDuration: 2000});
    } else {
      this.message.error('请输入描述！', {nzDuration: 2000});
    }
  }

  checkAll(e: boolean) {
    this.indeterminate = false;
    this.tableData.forEach(item => {
      item['checked'] = e;
      this.checkNum = e ? this.tableData.length : 0;
      this.checkMoney = e ? this.checkMoney + item['number'] : 0;
    });
  }

  refreshStatus(e: boolean, item: object) {
    if (e) {
      if (this.tableData.every(value => value['checked'])) {
        this.allChecked = true;
        this.indeterminate = false;
      }
      this.checkNum++;
      this.checkMoney += item['number'];
    } else {
      if (this.tableData.some(value => !value['checked'])) {
        this.allChecked = false;
        this.indeterminate = true;
      }
      if (this.tableData.every(value => !value['checked'])) {
        this.allChecked = false;
        this.indeterminate = false;
      }
      this.checkNum--;
      this.checkMoney -= item['number'];
    }
  }
}
