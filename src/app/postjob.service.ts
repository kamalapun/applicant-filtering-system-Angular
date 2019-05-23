import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostjobService {
   baseurl: string = "http://localhost:8080/api/company/";

  constructor(private httpClient:HttpClient) { }

  getCompany():Observable<any>{
    return this.httpClient.get<any>(this.baseurl)
  }




}
