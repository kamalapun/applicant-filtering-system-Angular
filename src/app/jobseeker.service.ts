import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobseekerService {
  baseurl: string = "http://localhost:8080/api/jobseeker/";

  constructor(private httpClient:HttpClient) { }

  getJobSeeker():Observable<any>{
    return this.httpClient.get<any>(this.baseurl)
  }
}
