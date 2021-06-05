import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ServiceService } from '../service.service';
import Colors from './temp';

// console.log("edw",Colors["Java"])

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  fromParent: any;
  hero$: any;
  data: string = 'harsha';
  users = {};
  colors: any;
  repos: any;
  a: string = 'shreeramk';
  repos_url: string = '';
  contributions: string = '';
  arr_names: any;
  commits: any;
  data1: any
  dataUser: any
  user_name: any
  created_at: any
  list_arrays: any[]= []   
  arrayData : any[]=[]
  final: any[]=[];

  constructor(
    private ar: ActivatedRoute,
    private ds: ServiceService,
    private hc: HttpClient
  ) {



    
let today = new Date()

let year =today.getFullYear()
  localStorage.setItem("year",year.toString())
  }


  contributions_to_child(year:any){


    localStorage.setItem('year',year)
    
    console.log("dd",year)
  }

  ngOnInit(): void {
    this.colors = { ...Colors }



    this.data1= localStorage.getItem('user')
    console.log(this.data1)

    this.ds.get_repos_from_api(this.data1).subscribe(


res=>{

this.dataUser=res
this.arrayData=this.dataUser

this.user_name= localStorage.getItem('user')
this.arrayData=this.arrayData.slice(0,6);





    for (let i = 0; i < this.arrayData.length; ++i) {
    

    
        // .get<any[]>(
        //   `https://api.github.com/repos/${this.arrayData[i].owner.login}/${this.arrayData[i].name}/languages`
        // )
        // .subscribe((res) => {
          // console.log( "res",res)
          // this.arr_names = [ ...this.arr_names, Object.keys(res).length===0?'':Object.keys(res)[0] ]
          let language = this.arrayData[i].language ? this.arrayData[i].language: ' '

          console.log(language)
         
          this.final = [
            ...this.final,
            {
              name: this.arrayData[i].name,
              description: this.arrayData[i].description,
              language: language,
              color: this.colors[language].color,
            },
          ];


        
      
    }

    console.log(this.final)
  }
);




this.created_at= localStorage.getItem('created')

this.created_at=parseInt(this.created_at)


let today = new Date()
// console.log(today.getFullYear())

for( let i = today.getFullYear() ; i>=  this.created_at ; --i){


this.list_arrays.push(i)



}

console.log(this.list_arrays)



// console.log(this.arrayData)

}
}