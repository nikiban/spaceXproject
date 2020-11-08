import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.spaceXdata.com/v3/launches'
  }
  public getAllData(): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=100`)
  }
  public getFilteredData(params): Observable<any> {
    let paramsStr = '';
    for (let key in params) {
      paramsStr = paramsStr + `&${key == 'year' ? 'launch_year' : (key == 'islaunch' ? 'launch_success' : 'land_success')}=${params[key]}`
    }
    return this.http.get(`${this.baseUrl}?limit=100${paramsStr}`)
  }
}
