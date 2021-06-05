import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Octokit } from 'octokit';
import { OverviewComponent } from '../overview/overview.component';
import { ServiceService } from '../service.service';
import { ContentChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [OverviewComponent],
})
export class ContentComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  data1 = '';
  profileImage = '';
  followersLink = '';
  w: boolean = false;
  x: boolean = false;
  y: boolean = false;

  z: boolean = false;
  count: any = 0;

  dataOfUser: string[] = [];
  constructor(

  ) {}


  ngOnInit(): void {
  
   

      
this.count=localStorage.getItem('count')



      
    
  }

  placeholder(dataplace: any) {
    if (dataplace == 1) {
      this.w = true;

      this.x = false;

      this.y = false;
      this.z = false;
    }

    if (dataplace == 2) {
      this.w = false;

      this.x = true;

      this.y = false;
      this.z = false;
    }

    if (dataplace == 3) {
      this.w = false;

      this.x = false;

      this.y = true;
      this.z = false;
    }

    if (dataplace == 4) {
      this.w = false;

      this.x = false;

      this.y = false;
      this.z = true;
    }
  }
}
