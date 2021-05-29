import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Octokit} from 'octokit';
import { OverviewComponent } from '../overview/overview.component';
import { ServiceService } from '../service.service';
import {ContentChild} from '@angular/core'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [OverviewComponent]
})
export class ContentComponent implements OnInit {
  data1 =''
  profileImage=''
  followersLink=''
  w:boolean=false
  x:boolean=false
  y:boolean=false
  
  z:boolean=false
count:number =0

  dataOfUser:string[]=[]
  constructor(private ds:ServiceService,private hc:HttpClient, private ar:ActivatedRoute) {

  

    


   }


   

  a: any
  followersCount: number=0
  followingCount: number=0

users: any
objData=""

  ngOnInit(): void {


    // console.log("Harhsal")

    this.data1=JSON.stringify(this.ar.snapshot.paramMap.get('username'))

    localStorage.setItem('username',this.data1)


    this.hc.get<any[]>(`https://api.github.com/users/${JSON.parse(this.data1)}`).subscribe(


      data=>{
      


        
        this.users=data;
        let items=this.users
      
        

        this.dataOfUser.push(items)
      
         this.ds.sendData(this.dataOfUser)
         this.data1=this.users.login
         this.profileImage=this.users.avatar_url
         this.followersLink=this.users.followers_url



        //  this.data1=this.data1
          //  this.objData= (JSON.parse(this.users))



      
      
      })

      this.hc.get<any[]>(`https://api.github.com/users/${JSON.parse(this.data1)}/repos`).subscribe(

        repos=>{

          console.log(repos.length)
          this.count=repos.length

        }     

      )

this.hc.get<any[]>(`https://api.github.com/users/${JSON.parse(this.data1)}/followers`).subscribe(

         data=>{
           this.followersCount=data.length
         }

      )
      

      this.hc.get<any[]>(`https://api.github.com/users/${JSON.parse(this.data1)}/following`).subscribe(

        data=>{
          this.followingCount=data.length
        }

     )
     

  }



  placeholder(dataplace:any){


if(dataplace==1){

  this.w=true

  this.x=false

  this.y=false
  this.z=false
}



if(dataplace==2){

  this.w=false

  this.x=true

  this.y=false
  this.z=false
}


if(dataplace==3){

  this.w=false

  this.x=false

  this.y=true
  this.z=false
}

if(dataplace==4){

  this.w=false

  this.x=false

  this.y=false
  this.z=true
}


   }



}
