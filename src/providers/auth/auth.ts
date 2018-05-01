import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { env } from '../../environment';
import { NavController, Nav } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { LoginPage } from '../../pages/login/login';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  @ViewChild(Nav) nav: NavController;

  baseURI: string = env.apiEndpoint;


  constructor(public http: HttpClient) {}

  public login(credentials: any, cb): void {
    this.http.post(`${this.baseURI}auth/jwt/create/`, credentials)
      .toPromise()
      .then(res => {
        this.handleAuthenticationSuccessful(res['token']);
        cb();
      }).catch(err => {
        cb();
      });;
  }

  public logout(): void {
    localStorage.clear();
  }

  private handleAuthenticationSuccessful(token: string): void {
    localStorage.setItem('token', token);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token')
  }

}
