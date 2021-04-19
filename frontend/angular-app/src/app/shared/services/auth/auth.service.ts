import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject(false);
  isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(private readonly _http: HttpClient) {
    this.setToken(this.getToken());
  }

  login(email: string, password: string): Observable<object> {
    return this._http.post('http://localhost:1234/api/login', {email, password}) as Observable<object>;
  }

  logout(): void {
    this.setToken('');
  }

  // TOKEN
  setToken(token: string | null): void {
    if (!token) {
      return
    } else {
      localStorage.setItem('token', token);
      this._isAuthenticated.next(true);
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
