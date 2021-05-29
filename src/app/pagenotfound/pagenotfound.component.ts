import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
})
export class PagenotfoundComponent implements OnInit {
  mouseX: any;
  mouseY: any;
  zero = -5;
  one = -6;
  constructor() {}

  onMouseMove(event: any) {
    this.mouseX = event.screenX;

    this.mouseY = event.screenY;

    this.zero = (this.mouseX / this.mouseY) * 0.2;

    this.one = (this.mouseY / this.mouseX) * 0.4;
  }
  ngOnInit(): void {}
}
