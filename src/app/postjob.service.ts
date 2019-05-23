import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostjobService {

  private url = "http://localhost:8080/api/"
  constructor(private http: HttpClient) { }

  getCompanyInfo():Observable<any> {
    return this.http.get(this.url+"/company");
  }
}
