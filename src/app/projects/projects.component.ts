import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  context = {
    message: 'Hello there!',
  };

  username: any;
  constructor() {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username'.replace('"', ''));

    this.username = this.username.replace(/"/g, '');
  }
}
