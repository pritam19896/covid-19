import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphapiService {

  constructor(private http: HttpClient) { }

  getGraphData() {
    return this.http.get('https://api.rootnet.in/covid19-in/stats/latest');
  }
}
