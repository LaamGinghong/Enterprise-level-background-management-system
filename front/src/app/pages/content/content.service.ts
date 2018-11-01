import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class ContentService {
  selectItem$ = new Subject();

  constructor(private http: HttpClient) {
  }


  getData(): Observable<object> {
    return this.http.get('http://localhost/menu');
  }

  broadcastSelectItem(content) {
    this.selectItem$.next(content);
  }
}
