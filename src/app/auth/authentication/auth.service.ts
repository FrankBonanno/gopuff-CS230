import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthResponse } from './authResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl: string =
    'https://identitytoolkit.googleapis.com/v1/accounts';
  private signUpEndpoint: string = 'signUp';
  private signInEndpoint: string = 'signInWithPassword';

  public constructor(private http: HttpClient) {}

  public signUp(email: string, password: string) {
    const reqPayload = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    return this.http.post<AuthResponse>(
      this.baseUrl +
        ':' +
        this.signUpEndpoint +
        '?key=' +
        environment.firebase.apiKey,
      reqPayload
    );
  }

  public login(email: string, password: string) {
    const reqPayload = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    return this.http.post<AuthResponse>(
      this.baseUrl +
        ':' +
        this.signInEndpoint +
        '?key=' +
        environment.firebase.apiKey,
      reqPayload
    );
  }
}
