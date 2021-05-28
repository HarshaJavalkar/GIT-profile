import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
data:any

  constructor(private ds:ServiceService) { 

    
  }

  @Input () toChild=''
  @Input () toChildImage=''

  @Input () toChildFCount=0
  @Input () toChildFgCount=0



  ngOnInit(): void {







  }



}
