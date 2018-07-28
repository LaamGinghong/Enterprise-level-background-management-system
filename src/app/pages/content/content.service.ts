import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContentService {
  URL = 'assets/menuData.json';

  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get(this.URL);
  }
}
