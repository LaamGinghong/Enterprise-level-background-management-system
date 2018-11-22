import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ContentService {
  selectItem$ = new Subject();

  constructor(private http: HttpClient) {
  }


  getData(): Observable<object> {
    return this.http.get(environment.url.localhost + '/common/menu');
  }

  broadcastSelectItem(content) {
    this.selectItem$.next(content);
  }
}
