import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ServiceService } from '../service.service';
import Colors from './temp'

// console.log("edw",Colors["Java"])

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
 fromParent: any 
 hero$: any
 data:string  ='harsha'
 users={}
 colors:any
 repos: any
 a: string='shreeramk'
 repos_url: string=''
 contributions: string= ''
 arr_names: any


 final:any;

 
 constructor(private ar: ActivatedRoute,private ds:ServiceService, private hc:HttpClient) { }
 
 ngOnInit(): void {
   
   this.colors  = { ...Colors}

    setTimeout(() => {
   this.fromParent= this.ds.getData()
this.repos_url= this.fromParent[0].repos_url

// console.log(JSON.parse(this.fromParent[0].login))
this.hc.get<any[]>(`https://api.github.com/users/${ this.fromParent[0].login}/repos`).subscribe(
// name desc lang
         data=>{
           this.repos=data

          this.repos=this.repos.slice(0,6)

          this.arr_names=[]
          this.final=[]

          for( let i =0 ; i < this.repos.length;++i){

            // console.log(this.repos[i].name)

            this.hc.get<any[]>( `https://api.github.com/repos/${this.repos[i].owner.login}/${this.repos[i].name}/languages`).subscribe(

            res=>{
              // console.log( "res",res)
              // this.arr_names = [ ...this.arr_names, Object.keys(res).length===0?'':Object.keys(res)[0] ]
              let language = Object.keys(res).length===0?'':Object.keys(res)[0]
              this.final = [ ...this.final, {
                name: this.repos[i].name,
                description:this.repos[i].description,
                language: language,
                color: this.colors[language].color
              }]
      


// if( Object.keys(res)[0]==null)
// this.arr_names.append('')
//          this.arr_names.append( Object.keys(res)[0])

            
            }
            )

              
    
          }

        

         }

      )



      this.contributions=`https://ghchart.rshah.org/${this.fromParent[0].login}`;




     



},1000);




 













  }

}
