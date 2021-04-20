import { Injectable } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuardService implements CanActivate {

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._authService.isAuthenticated()) {
      return true;
    } else {
      this._router.navigate(['administration/edition']);
      return true;
    }
  }
}
