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

  getData(url: string, data?: object): Observable<object> {
    const params = SharingService.valueToHttpParams(data);
    return this.http.get(environment.url.localhost + url, {params});
  }

  getDashboardCard(): Observable<object> {
    return this.getData('/dashboardCard');
  }

  getDashboardArticle(): Observable<object> {
    return this.getData('/dashboardArticle');
  }

  getDashboardRidership(): Observable<object> {
    return this.getData('/dashboardRidership');
  }

  getDashboardMessage(): Observable<object> {
    return this.getData('/dashboardMessage');
  }

  getDashboardMessageDelete(data: object): Observable<object> {
    return this.getData('/dashboardMessageDelete', data);
  }
}
