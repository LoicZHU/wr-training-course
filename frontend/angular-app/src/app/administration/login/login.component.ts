import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  passwordMinLength: number = 8;

  constructor(
    private _fb: FormBuilder
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
    this.saveForm()
  }

  saveForm(): void {
    if (this.formLogin.invalid) {
      return;
    } else {
      // this._editionCourseService.setForm({formName: 'formQuiz', formValues: this.formQuizz.value});
    }

    console.log(999)
  }
}
