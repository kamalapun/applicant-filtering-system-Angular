import { Component, OnInit } from '@angular/core';
import { PostjobService } from '../postjob.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  company:any;
    constructor(private postjobService: PostjobService){}

  ngOnInit() {
  }

  
  getAll() {
    this.postjobService.getCompanyInfo().subscribe(data => {
      this.company = data;
      console.log(this.company);
    });
 }

}
