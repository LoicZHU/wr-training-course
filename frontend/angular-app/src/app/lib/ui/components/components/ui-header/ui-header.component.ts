import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiHeaderComponent implements OnInit {
  @Input() showInput: boolean = false;
  @Input() title: string = '';
  course: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addCourse() {
    if (this.course) {
      this.course = this.course;
    }
  }
}
