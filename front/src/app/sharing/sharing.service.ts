import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class SharingService {

  constructor() {
  }

  static valueToHttpParams(value: object): HttpParams {
    let params = new HttpParams();
    for (const i in value) {
      if (value.hasOwnProperty(i)) {
        params = params.set(i, value[i]);
      }
    }
    return params;
  }

  static dateToString(today: Date): string {
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    return `${year}-${month >= 10 ? month : `0${month}`}-${date >= 10 ? date : `0${date}`} ${hour >= 10 ? hour : `0${hour}`}:${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`;
  }
}
