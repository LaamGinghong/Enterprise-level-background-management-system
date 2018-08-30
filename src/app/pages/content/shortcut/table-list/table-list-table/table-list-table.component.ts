import {Component, OnInit} from '@angular/core';
import {TableListService} from '../table-list.service';

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
    value: 0,
    label: '关闭'
  }, {
    value: 1,
    label: '运行中'
  }, {
    value: 2,
    label: '已上线'
  }, {
    value: 3,
    label: '异常'
  }];
  tableData: Array<object>;


  constructor(
    private tableListService: TableListService
  ) {
  }

  ngOnInit() {
    this.tableData = this.tableListService.initTableData();
  }

}
