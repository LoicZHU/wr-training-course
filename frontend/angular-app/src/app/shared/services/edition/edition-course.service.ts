import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditionCourseService {
  newCourse: {formContent: object | null, formQuiz: object | null, formVideo: object | null} = {
    formContent: null,
    formQuiz: null,
    formVideo: null,
  }

  constructor() { }

  setForm({formName = '', formValues = null}): void {
    if (!formName || !formValues) {
      return
    } else {
      this.newCourse = Object.assign({}, this.newCourse, {[formName]: formValues})
    }

    console.log(this.newCourse)
  }
}
