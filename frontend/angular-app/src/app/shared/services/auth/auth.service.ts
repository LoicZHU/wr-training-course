import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject(false);

  constructor(
    private readonly _http: HttpClient,
    private readonly _router: Router,
  ) {
    this.setToken(this.getToken());
  }

  login(email: string, password: string): Observable<object> {
    return this._http.post('http://localhost:1234/api/login', {email, password}) as Observable<object>;
  }

  logout(): void {
    this.setToken(null);
    this._router.navigate(['administration/login'])
  }

  // TOKEN
  setToken(token: string | null): void {
    if (!token) {
      localStorage.removeItem('token');
      this._isAuthenticated.next(false);
    } else {
      localStorage.setItem('token', token);
      this._isAuthenticated.next(true);
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return this._isAuthenticated.value
  }
}
