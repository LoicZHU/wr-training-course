import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

import {AuthService} from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin!: FormGroup;
  passwordMinLength: number = 8;
  loginSubscription?: Subscription;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {
    this.initFormLLogin()
  }

  initFormLLogin(): void {
    this.formLogin = this._fb.group({
      email: this._fb.control(null, [Validators.minLength(5), Validators.email, Validators.required]),
      password: this._fb.control(null, [Validators.minLength(this.passwordMinLength), Validators.required])
    })
  }

  onSubmit(): void {
    this.login()
  }

  login(): void {
    if (this.formLogin.invalid) {
      return;
    } else {
      const email: string = this.formLogin.get('email')!.value;
      const password: string = this.formLogin.get('password')!.value;

     this.loginSubscription = this._authService.login(email, password)
      .subscribe((res: any) => {
        this._authService.setToken(res['access_token']);
        this._router.navigate(['administration/edition']);
      })
    }
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }
}
