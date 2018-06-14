import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { env } from '../../environment';
import { NavController, Nav } from 'ionic-angular';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  @ViewChild(Nav) nav: NavController;

  baseURI: string = env.apiEndpoint;

  favorites;


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

  public getToken(): string {
    return localStorage.getItem('token')
  }

  public getMyFavorites(): void {
    this.http.get(`${this.baseURI}my_favorites/`).toPromise().then(res => {
      this.favorites = JSON.parse(res as string);
    });
  }

  public updateMyFavorites(newFavorites): void {
    this.http.patch(`${this.baseURI}my_favorites/`, { favorites: newFavorites }).toPromise().then(res => {
      this.favorites = res;
    });
  }

}
