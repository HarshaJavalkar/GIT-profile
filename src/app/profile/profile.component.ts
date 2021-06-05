import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {



  data1: any;
  stars:any
  users:any

  dataUser=[]

  h:any[]=[]
  dataOfUser: string[] = [];
  Pro_data:any
  starsArray: any
  created_at: any


  constructor(private ds: ServiceService,private ar: ActivatedRoute,private hc:HttpClient) {
 

  
    

  }


  



  ngOnInit(): void {


    this.data1=JSON.stringify(this.ar.snapshot.paramMap.get('username'))

    // console.log(JSON.parse(this.data1))

    localStorage.setItem('user',JSON.parse(this.data1))


    this.ds.get_stars_api(this.data1).subscribe(



      res=>{


        this.starsArray=res;

     this.stars=this.starsArray.length
      }
    )

    this.ds.get_data_from_api(this.data1).subscribe(



    res=>{
     this. created_at= res.created_at.substring(0,4)

     this.created_at= parseInt(this.created_at)
     localStorage.setItem("created",this.created_at)
      
      
  this.dataUser=res
  let k=this.dataUser
console.log(this.dataUser)
this.h.push(k)



 
    },
    err=>{

    } );



 

    
    
    

     

      






    
  }


 
}
