import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import Colors from '../overview/temp';

@Component({
  selector: 'app-pinned-repositories',
  templateUrl: './pinned-repositories.component.html',
  styleUrls: ['./pinned-repositories.component.css']
})
export class PinnedRepositoriesComponent implements OnInit {
  pinned_repos: Array<any>;
  username: string;
  colors: any;

  constructor(private ds: ServiceService) {
    this.pinned_repos = [];
    this.username = ""
    this.colors = {...Colors}
  }

  ngOnInit(): void {
    setTimeout(() => {
      let data = this.ds.getData()
      this.username = data[0].login;
      
      if(!!this.username) {
        fetch(`https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${this.username}`)
        .then(r => r.json())
        .then(res => {
          this.pinned_repos = res.map((r: any) => {
            return {
              ...r,
              color: this.colors[r.language]?.color || "#ffffff"
            }
          })
        })
        .catch(e => console.log(e))
      }
    }, 500)
  }

}
