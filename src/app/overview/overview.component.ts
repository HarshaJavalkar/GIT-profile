import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ServiceService } from '../service.service';
import Colors from './temp';
import Contributions from './raw_data';

// console.log("edw",Colors["Java"])

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],

  styles: [
    `
      .my-custom-class {
        background-color: aliceblue;
        font-size: 125%;
      }
      .my-custom-class .arrow::after {
        border-top-color: aliceblue;
      }
    `,
  ],
})
export class OverviewComponent implements OnInit {
  fromParent: any;
  hero$: any;

  arrays: any[] = [];
  year_selected: any = 2021;
  data: string = 'harsha';
  users = {};
  colors: any;
  repos: any;
  a: string = 'shreeramk';
  repos_url: string = '';
  contributions: string = '';
  arr_names: any;
  commits: any;
  data1: any;
  dataUser: any;
  user_name: any;
  created_at: any;
  list_arrays: any[] = [];
  arrayData: any[] = [];
  myArray: any[] = [];
  final: any[] = [];
  count_contributions: any = 335;

  twoD_Array: any[] = [];
  trial: any;

  final1: any[] = [];
  pre_final: any[] = [];
  contributions1: any;

  constructor(
    private ar: ActivatedRoute,
    private ds: ServiceService,
    private hc: HttpClient,
    private router: Router
  ) {
    let today = new Date();

    let year = today.getFullYear();
    localStorage.setItem('year', year.toString());
  }

  re_render() {
    // this.arrays[2]=0

    let len = this.contributions1.contributions.length;

    let count = 0;
    for (let i = 0; i < len; i++) {
      let y = new Date(this.contributions1.contributions[i].date);
      if (y.getFullYear() === this.year_selected) {
        this.pre_final[count++] = this.contributions1.contributions[i];
      }
    }

    // console.log(this.pre_final)

    this.final1 = [];
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 52; j++) {
        //  console.log(i ," ", j , " ",this.final1[i]   )

        let x = 7 * j + i;

        let temp = {
          date: this.pre_final[x].date,
          count: this.pre_final[x].count == 0 ? 'No' : this.pre_final[x].count,
          color: this.pre_final[x].color,
        };

        this.final1.push(temp);
      }
    }

    this.final1 = this.final1.reverse();

    // console.log(this.final1)

    this.data1 = localStorage.getItem('user');
  }
  contributions_to_child(year: any) {
    localStorage.setItem('year', year);

    this.year_selected = year;

    let length_years = this.contributions1.years.length;
    for (let i = 0; i < length_years; i++) {
      if (this.contributions1.years[i].year == this.year_selected) {
        this.count_contributions = this.contributions1.years[i].total;
      }
    }

    this.re_render();
  }

  ngOnInit(): void {
    this.colors = { ...Colors };

    // this.twoD_Array=new Array<number>(366)

    this.data1 = localStorage.getItem('user');

    this.ds.get_repos_from_api(this.data1).subscribe((res) => {
      this.dataUser = res;

      this.arrayData = this.dataUser;

      this.user_name = localStorage.getItem('user');
      this.arrayData = this.arrayData.slice(0, 6);

      for (let i = 0; i < this.arrayData.length; ++i) {
        // .get<any[]>(
        //   `https://api.github.com/repos/${this.arrayData[i].owner.login}/${this.arrayData[i].name}/languages`
        // )
        // .subscribe((res) => {

        // this.arr_names = [ ...this.arr_names, Object.keys(res).length===0?'':Object.keys(res)[0] ]
        let language = this.arrayData[i].language
          ? this.arrayData[i].language
          : ' ';

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
    });

    this.created_at = localStorage.getItem('created');

    this.created_at = parseInt(this.created_at);

    let today = new Date();
    // console.log(today.getFullYear())

    for (let i = today.getFullYear(); i >= this.created_at; --i) {
      this.list_arrays.push(i);
    }

    // console.log(this.arrayData)

    this.contributions1 = { ...Contributions };

    this.re_render();
  }
}
