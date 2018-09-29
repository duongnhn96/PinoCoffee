import { AppUrl } from './../../config/appconfig';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    return this.http.post(`${AppUrl.ROOT_URL}/login`, {username: email, password: password});
 }
}
