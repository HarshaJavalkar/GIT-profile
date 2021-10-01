import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-contriutions',
  templateUrl: './contriutions.component.html',
  styleUrls: ['./contriutions.component.css'],
})
export class ContriutionsComponent implements OnInit {
  data: any;


  x: any[]=[1,2,3,4]

  y: any[]=['x','y','z','a']
  constructor(private ds: ServiceService) {
    this.data = localStorage.getItem('year');
  }

  ngOnInit(): void {  }
}
