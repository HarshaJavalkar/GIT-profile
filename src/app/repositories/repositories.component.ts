import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

import Colors from './temp';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  fromParent: any;
  reposUrl: any;
  constructor(private ds: ServiceService, private hc: HttpClient) {}

  hero$: any;
  data: string = 'harsha';
  users = {};
  colors: any;
  repos: any;
  a: string = 'shreeramk';
  repos_url: string = '';
  contributions: string = '';
  arr_names: any;

  final: any;

  ngOnInit(): void {
    this.colors = { ...Colors };
    dayjs.extend(relativeTime);

    setTimeout(() => {
      this.fromParent = this.ds.getData();
      this.repos_url = this.fromParent[0].repos_url;

      // console.log(JSON.parse(this.fromParent[0].login))
      this.hc
        .get<any[]>(
          `https://api.github.com/users/${this.fromParent[0].login}/repos?sort=pushed`
        )
        .subscribe(
          // name desc lang
          (data) => {
            this.repos = data;

            this.arr_names = [];
            this.final = data.map((repo) => {
              return {
                name: repo.name,
                description: repo.description,
                language: repo.language,
                license: repo.license?.name,
                color: this.colors[repo.language]?.color || '#ffffff',
                license_condition: !!repo.license?.name,
                color_condition: !!this.colors[repo.language]?.color,
                last_updated:
                  dayjs().diff(repo.updated_at, 'month') > 1
                    ? `Updated on ${dayjs(repo.updated_at).format('DD MMM')}`
                    : `Updated ${dayjs(repo.updated_at).fromNow()}`,
              };
            });
          }
        );
    }, 1000);
  }
}
