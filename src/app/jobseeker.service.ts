import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobseekerService {

  private url = "http://localhost:8080/api/"
  constructor(private http: HttpClient) { }

  getApplicantInfo():Observable<any> {
    return this.http.get(this.url+"/jobseeker");
  }
}
