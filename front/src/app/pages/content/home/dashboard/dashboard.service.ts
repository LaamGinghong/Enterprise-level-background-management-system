import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {SharingService} from '../../../../sharing/sharing.service';

@Injectable()
export class DashboardService {

  constructor(
    private http: HttpClient
  ) {
  }

  getData(url: string, data?: object): Observable<object> {
    const params = SharingService.valueToHttpParams(data);
    return this.http.get(environment.url.localhost + url, {params});
  }

  getDashboardCardLeft(): Observable<object> {
    return this.getData('/dashboardCardLeft');
  }

  getDashboardCardRight(data: object): Observable<object> {
    return this.getData('/dashboardCardRight', data);
  }
}
