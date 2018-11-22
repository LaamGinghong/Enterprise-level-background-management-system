import {ElementRef, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {SharingService} from '../../../../sharing/sharing.service';

@Injectable()
export class DashboardService {
  chatBox: ElementRef;
  todo: ElementRef;

  constructor(
    private http: HttpClient
  ) {
  }

  getData(url: string, data?: any): Observable<object> {
    const params = SharingService.valueToHttpParams(data);
    return this.http.get(environment.url.localhost + url, {params});
  }

  getDashboardCard(): Observable<object> {
    return this.getData('/dashboard/card');
  }

  getDashboardArticle(): Observable<object> {
    return this.getData('/dashboard/article');
  }

  getDashboardRidership(): Observable<object> {
    return this.getData('/dashboard/ridership');
  }

  getDashboardMessage(): Observable<object> {
    return this.getData('/dashboard/message');
  }

  getDashboardMessageDelete(data: object): Observable<object> {
    return this.getData('/dashboard/message/delete', data);
  }

  getDashboardMessageActive(data: object): Observable<object> {
    return this.getData('/dashboard/message/active', data);
  }
}
