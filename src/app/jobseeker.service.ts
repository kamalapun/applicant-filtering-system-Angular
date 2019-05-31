import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobseeker } from './jobseeker';

@Injectable({
  providedIn: 'root'
})
export class JobseekerService {
  baseurl: string = "http://localhost:8080/api/jobseeker/dt";

  constructor(private httpClient:HttpClient) { }

  getJobSeeker():Observable<any>{
    return this.httpClient.get<any>(this.baseurl)
  }

  save(jobseekerObject : Jobseeker){
    return this.httpClient.post(this.baseurl,jobseekerObject)
  }
}
