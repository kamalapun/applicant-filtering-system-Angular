import { Component, OnInit } from '@angular/core';
import { PostjobService } from '../postjob.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  

  constructor(private postjobservice:PostjobService) { }

  ngOnInit() {
  
  }
  
}
