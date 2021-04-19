import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiHeaderComponent implements OnInit {
  @Input() showInput: boolean = false;
  @Input() title: string = '';
  course: string = '';

  constructor(private _authService: AuthService) {
  }

  ngOnInit(): void {
  }

  addCourse() {
    if (this.course) {
      this.course = this.course;
    }
  }

  logout(): void {
    this._authService.logout()
  }
}
