import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../jobseeker.service';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit{
  applicant:any;
  constructor(private jobSeekerService: JobseekerService){

  }
 ngOnInit(){
 }

 getAll() {
    this.jobSeekerService.getApplicantInfo().subscribe(data => {
      this.applicant = data;
      console.log(this.applicant);
    });
 }

}

