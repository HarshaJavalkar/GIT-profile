import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ServiceService } from '../service.service';
import Contributions from './contributions_json' ;






@Component({
  selector: 'app-contriutions',
  templateUrl: './contriutions.component.html',
  styleUrls: ['./contriutions.component.css']
})
export class ContriutionsComponent implements OnInit {
  data: any
  data1: any
  trial: any



  final: any[]=[]
  contributions: any 
  constructor(private ds: ServiceService) { 



    this.data= localStorage.getItem('year')






  }

  ngOnInit(): void {


    this.contributions=  { ...Contributions }






    let len=this.contributions.contributions.length

    for( let i=0 ; i< len; i++){
     

    let temp = {

     date: this.contributions.contributions[i].date,
     color: this.contributions.contributions[i].color



 
    }


    this.final.push(temp)



    }



    
    // console.log(this.final)


    // console.log(this.final)






  this.data1=localStorage.getItem('user')






  


  }

}
