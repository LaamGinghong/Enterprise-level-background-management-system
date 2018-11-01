import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ContentService {
  URL = 'assets/menuData.json';
  selectItem$ = new Subject();

  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get(this.URL);
  }

  broadcastSelectItem(content) {
    this.selectItem$.next(content);
  }
}
