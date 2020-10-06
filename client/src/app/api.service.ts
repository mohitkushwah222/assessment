import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const baseURL = 'http://localhost:3000/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  createLogtime(payload) {
    return this.httpClient.post(baseURL + '/createLogtime', JSON.stringify(payload), httpOptions)
      .pipe(map((response: Response) => response));
  }

  getProjects() {
    return this.httpClient.get(baseURL + '/getProjects', httpOptions);
  }

  getEmployees() {
    return this.httpClient.get(baseURL + '/getEmployees', httpOptions);
  }

  getLogtime() {
    return this.httpClient.get(baseURL + '/getLogtime', httpOptions);
  }
}
