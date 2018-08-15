import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  URL = '../../../../../../assets/world-population.json';

  constructor(
    private http: HttpClient
  ) {
  }

  getData() {
    return this.http.get(this.URL);
  }
}
