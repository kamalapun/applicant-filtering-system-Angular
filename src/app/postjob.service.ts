import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostJob } from './postjob';


@Injectable({
  providedIn: 'root'
})
export class PostjobService {
   baseurl: string = "http://localhost:8080/api/company/";

  constructor(private httpClient:HttpClient) { }

  getCompany():Observable<any>{
    return this.httpClient.get<any>(this.baseurl)
  }
  save(postJobObject : PostJob){
    return this.httpClient.post(this.baseurl,postJobObject)
  }

}
