import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-contriutions',
  templateUrl: './contriutions.component.html',
  styleUrls: ['./contriutions.component.css']
})
export class ContriutionsComponent implements OnInit {
  data: any
  data1: any
  trial: any

  constructor(private ds: ServiceService) { 



    this.data= localStorage.getItem('year')

    console.log(this.data)




  }

  ngOnInit(): void {



  this.data1=localStorage.getItem('user')




  this.ds.get_contributions_api(this.data1).subscribe(


    res=>{

      console.log(res)
    },



    err=>{

console.log("harsha",err)

    }

  )


  }

}
