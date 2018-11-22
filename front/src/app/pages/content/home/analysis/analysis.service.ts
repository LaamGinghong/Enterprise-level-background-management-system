import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SharingService} from '../../../../sharing/sharing.service';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor(
    private http: HttpClient
  ) {
  }

  getData(url: string, data?: any): Observable<object> {
    const params = SharingService.valueToHttpParams(data);
    return this.http.get(environment.url.localhost + url, {params});
  }

  getSaleOrVolume(data: object): Observable<object> {
    return this.getData('/analysis/getSaleOrVolume', data);
  }
}
