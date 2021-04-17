import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edition-course',
  templateUrl: './edition-course.component.html',
  styleUrls: ['./edition-course.component.scss']
})
export class EditionCourseComponent implements OnInit {
  isShownContentForm: boolean = false;
  isShownQuizForm: boolean = false;
  isShownVideoForm: boolean = false;
  showLesson: boolean = false;
  lesson: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  showContentForm(): void {
    this.isShownContentForm = !this.isShownContentForm;
  }

  showQuizForm(): void {
    this.isShownQuizForm = !this.isShownQuizForm;
  }

  showVideoForm(): void {
    this.isShownVideoForm = !this.isShownVideoForm;
  }

  addLesson() {
    if (this.lesson) {
      this.lesson = this.lesson;
    }
  }
}
