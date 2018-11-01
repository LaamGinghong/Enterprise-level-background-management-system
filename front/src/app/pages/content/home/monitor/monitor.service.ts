import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  constructor(
    private http: HttpClient
  ) {
  }

  getData(url) {
    return this.http.get(url);
  }

  getPopulation() {
    return this.getData('../../../../../../assets/world-population.json');
  }

  getAirData() {
    return this.getData('../../../../../../assets/airData.json');
  }
}
