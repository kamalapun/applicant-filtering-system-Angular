import { Component, OnInit } from '@angular/core';
import { PostjobService } from '../postjob.service'
import { PostJob } from '../postjob';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  
  postjobObject = new PostJob();
  jobList : PostJob[] = [];
  isEdit:boolean = false;

  constructor(private postjobService:PostjobService) { }

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


  
}
