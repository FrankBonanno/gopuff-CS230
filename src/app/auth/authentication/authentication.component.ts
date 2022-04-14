import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';
import { AuthResponse } from './authResponse';

@Component({
  selector: 'gp-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  public buttonClicked!: string;
  private authObservable!: Observable<AuthResponse>;
  public userEmail: string = '';

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {}

  public onSubmit(data: NgForm) {
    console.log('Button Clicked: ' + this.buttonClicked);
    console.log(data);
    this.userEmail = '';

    if (this.buttonClicked == 'signup') {
      this.authObservable = this.auth.signUp(
        data.value.email,
        data.value.password
      );
    }
    if (this.buttonClicked == 'login') {
      this.authObservable = this.auth.login(
        data.value.email,
        data.value.password
      );
    }

    this.authObservable.subscribe(
      (resData: AuthResponse) => {
        if (resData.registered) {
          this.userEmail = resData.email;
        } else {
          this.userEmail = '';
        }
      },
      (error) => console.log(error.error)
    );

    data.reset();
  }
}
