import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { Jobseeker } from '../jobseeker';
import { JobseekerService } from '../jobseeker.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {
  jobseekerObject = new Jobseeker();
  jobseekerList: any[];
  isEdit: boolean = false;
  closeResult: string;
  isQualified: boolean = false;
  @ViewChild('content') input: ElementRef;



  constructor(private jobseekerService: JobseekerService,private router :Router,private modalService: NgbModal) {

  }

  ngOnInit() {
    // this.getJobSeeker();
    this.jobseekerObject = new Jobseeker();

  }

  // getJobSeeker() {
  //   this.jobseekerService.getJobSeeker().subscribe((res: Jobseeker[]) => {
  //     this.jobseekerList = res;
  //     console.log(this.jobseekerList);
  //     this.jobseekerObject = new Jobseeker();
  //   })
  // }

  saveJobseeker(){
    console.log(this.jobseekerObject);
    this.jobseekerService.save(this.jobseekerObject).subscribe(res=>{
      this.jobseekerList = res;
      console.log(res);
      console.log(typeof(res))

      // if(res ===1){
      //   this.open(this.input);
      //   this.isQualified = true;
      // }else{
      //   this.open(this.input);
      //   this.isQualified = false;
      // }
    })
  }

   goto(){
     this.router.navigate(['home', this.jobseekerList]);
   }

   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult =`Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}