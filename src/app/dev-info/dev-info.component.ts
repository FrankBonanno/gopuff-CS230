import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { DevInfo } from './dev-info.model';

@Injectable()
@Component({
  selector: 'gp-dev-info',
  templateUrl: './dev-info.component.html',
  styleUrls: ['./dev-info.component.css'],
})
export class DevInfoComponent implements OnInit {
  devInfo: DevInfo | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('-- Sending GET req to server --');
    this.getDevInfo();
    console.log('-- Registering showDevInfo as a subscriber --');
    this.showDevInfo();
  }

  getDevInfo() {
    return this.http.get<DevInfo>(
      'https://go-puff-app-fb-default-rtdb.firebaseio.com/my-info.json'
    );
  }

  showDevInfo() {
    this.getDevInfo().subscribe((data: DevInfo) => {
      // console.log(data);
      this.devInfo = data;
    });
  }
}
