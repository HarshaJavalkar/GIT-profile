import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'git';

  username: any;
  image: any;
  constructor(private hc: ServiceService) {
    this.username = JSON.stringify(localStorage.getItem('user'));

    console.log(this.username);
    this.hc.get_data_from_api(this.username).subscribe((res) => {
      this.image = res.avatar_url;

      // console.log(this.image)
    });
  }
}
