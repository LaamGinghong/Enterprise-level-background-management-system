import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableListService {
  today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  newYearsDay = new Date(2018, 1, 1);
  gapDate = this.today.getTime() - this.newYearsDay.getTime();

  constructor() {
  }

  initTableData(): Array<object> {
    const tableData = [];
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setTime(Math.round((Math.random() * this.gapDate) + this.newYearsDay.getTime()));
      const option = {
        orderId: `TradeCode${i}`,
        description: '这是一段描述',
        number: Math.round(Math.random() * 1000),
        status: Math.floor(Math.random() * 4),
        time: date,
        timeString: `${date.getFullYear()}-${date.getMonth() > 10 ? date.getMonth() : `0${date.getMonth()}`}-${date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`} ${date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`}:${date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`}:${date.getSeconds() > 10 ? date.getSeconds() : `0${date.getSeconds()}`}`
      };
      tableData.push(option);
    }
    return tableData;
  }
}
