import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'git';

  username: any;

  constructor() {
    setTimeout(() => {
      this.username = localStorage.getItem('username'.replace('"', ''));

      this.username = this.username.replace(/"/g, '');
    }, 3000);
  }
}
