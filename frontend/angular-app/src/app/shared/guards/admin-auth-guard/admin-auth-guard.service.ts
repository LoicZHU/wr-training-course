import { Injectable } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {
  ActivatedRouteSnapshot, CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanLoad, CanActivate {

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
  ) { }

  checkAuthentificated(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._authService.isAuthenticated()) {
      this._router.navigate(['administration/login']);
      return false;
    } else {
      return true;
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthentificated()
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthentificated()
  }
}
