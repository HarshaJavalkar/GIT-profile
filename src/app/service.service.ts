import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService implements OnInit {



  stars:any
  users:any


  dataOfUser: string[] = [];
  Pro_data:any;

// private rest_url=` `


  
  ngOnInit(){

   

  }
 get_data_from_api(data1:any):Observable<any>{


return this.hc.get(`https://api.github.com/users/${JSON.parse(data1)}`)
  
  }



  get_contributions_api(data1:any):Observable<any>{

    
  
    return this.hc.get(`https://github-contributions.vercel.app/api/v1/${data1}`)
  }






  

  get_stars_api(data1:any):Observable<any>{



    return this.hc.get(`https://api.github.com/users/${JSON.parse(data1)}/starred`)
  }





  get_repos_from_api(data1:any):Observable<any>{



    return this.hc.get(`https://api.github.com/users/${data1}/repos`)
  }
  

  localArray: any;

  constructor(private hc: HttpClient ,private ar: ActivatedRoute) {



  }













    
    

}
