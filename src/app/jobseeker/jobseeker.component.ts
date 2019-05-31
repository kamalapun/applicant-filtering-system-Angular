import { Component, OnInit } from '@angular/core';
import { Jobseeker } from '../jobseeker';
import { JobseekerService } from '../jobseeker.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {
  jobseekerObject = new Jobseeker();
  jobseekerList: Jobseeker[];
  isEdit: boolean = false;

  constructor(private jobseekerService: JobseekerService,private router :Router) {

  }

  ngOnInit() {
    this.getJobSeeker();
    this.jobseekerObject = new Jobseeker();

  }

  getJobSeeker() {
    this.jobseekerService.getJobSeeker().subscribe((res: Jobseeker[]) => {
      this.jobseekerList = res;
      this.jobseekerObject = new Jobseeker();
    })
  }

  saveJobseeker(){
    console.log(this.jobseekerObject);
    this.jobseekerService.save(this.jobseekerObject).subscribe(res=>{
      this.getJobSeeker()
    })
  }

   goto(){
     this.router.navigate(['']);
   }
}