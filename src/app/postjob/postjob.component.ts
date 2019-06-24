import { Component, OnInit } from '@angular/core';
import { PostjobService } from '../postjob.service'
import { PostJob } from '../postjob';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  
  postjobObject = new PostJob();
  jobList : PostJob[];
  isEdit:boolean = false;

  constructor(private postjobService:PostjobService,private router:Router) { }

  ngOnInit() {
    this.getCompany();
    this.postjobObject = new PostJob();
  
  }

  getCompany(){
    this.postjobService.getCompany().subscribe((res:PostJob[])=>{
      this.jobList = res;
      this.postjobObject = new PostJob();
     })
  } 

  saveCompany(){
    console.log(this.postjobObject);
    this.postjobService.save(this.postjobObject).subscribe(res=>{
      this.getCompany()
    })
  }

}
