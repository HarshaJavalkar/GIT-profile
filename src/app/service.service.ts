import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  localArray: any;

  constructor(private hc: HttpClient) {}

  sendData(data: any) {
    this.localArray = data;
  }

  getData() {
    // console.log("localarray",this.lo calArray)

    return this.localArray;
  }
}
