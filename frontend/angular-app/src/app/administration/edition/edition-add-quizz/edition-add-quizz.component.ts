import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {EditionCourseService} from "../../../shared/services/edition/edition-course.service";

@Component({
  selector: 'app-edition-add-quizz',
  templateUrl: './edition-add-quizz.component.html',
  styleUrls: ['./edition-add-quizz.component.scss']
})
export class EditionAddQuizzComponent implements OnInit {
  formQuizz!: FormGroup;
  submittedAtLeastOnce: boolean = false;
  htmlAnswers: {placeholder: string, name: string, id: string, value: string, isAnswer: boolean, checkbox: string, formControl: string}[] = [
    {placeholder: 'Réponse 1...', name: 'answer1', id: 'answer1', value: '', isAnswer: false, checkbox: 'checkbox1', formControl: 'answer1'},
    {placeholder: 'Réponse 2...', name: 'answer2', id: 'answer2', value: '', isAnswer: false, checkbox: 'checkbox2', formControl: 'answer2'},
    {placeholder: 'Réponse 3...', name: 'answer3', id: 'answer3', value: '', isAnswer: false, checkbox: 'checkbox3', formControl: 'answer3'},
  ];

  @Output() saved: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _fb: FormBuilder,
    private _editionCourseService: EditionCourseService,
  ) { }

  ngOnInit(): void {
    this.initQuizzForm();
  }

  onSubmit(): void {
    this.submittedAtLeastOnce = true;
    this.updateAllInputsValue()
    this.saveForm()
  }

  closeForm(): void {
    this.saved.emit()
  }

  saveForm(): void {
    if (this.formQuizz.invalid) {
      return;
    } else {
      this._editionCourseService.setForm({formName: 'formQuiz', formValues: this.formQuizz.value});
      this.closeForm()
    }
  }

  updateAllInputsValue(): void {
    if (this.formQuizz.status == 'INVALID') {
      return;
    } else {
      let htmlAnswers = [...this.htmlAnswers]

      htmlAnswers = htmlAnswers.map((answer, idx) => {
        // @ts-ignore
        const valueObj = {value: this.formQuizz.get([`answer${idx + 1}`]).value};
        return Object.assign({}, answer, valueObj)
      })

      this.htmlAnswers = [...htmlAnswers];
    }
  }

  initQuizzForm(): void {
    this.formQuizz = this._fb.group({
      title: this._fb.control('', [Validators.minLength(1), Validators.required]),
      question: this._fb.control('', [Validators.minLength(1), Validators.required]),
      answer1: this._fb.control('', [Validators.minLength(1), Validators.required]),
      answer2: this._fb.control('', [Validators.minLength(1), Validators.required]),
      answer3: this._fb.control('', [Validators.minLength(1), Validators.required]),
      groupCheckbox: this._fb.group({
        1: this._fb.control(false),
        2: this._fb.control(false),
        3: this._fb.control(false),
      })
    });

    this.formQuizz.controls.groupCheckbox.setValidators(this.requireCheckboxesToBeCheckedValidator())
  }

  requireCheckboxesToBeCheckedValidator(minRequired = 1): ValidatorFn {
    // @ts-ignore
    return function validate(formGroup: FormGroup): ValidationErrors | null {
      let checked = 0;

      Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.controls[key];

        if (control.value === true) {
          checked++;
        }
      });

      if (checked < minRequired) {
        return {requireCheckboxesToBeChecked: true};
      } else {
        return null;
      }
    };
  }

  addAnswer(): void {
    const newAnswerNumber: number = this.htmlAnswers.length + 1;

    this.addHtmlAnswer(newAnswerNumber);
    this.addAnswerFormControl(newAnswerNumber)
    this.addFormControlInGroupCheckbox(newAnswerNumber)
  }

  addFormControlInGroupCheckbox(idx: number): void {
    const formGroupCheckbox = this.formQuizz.get(['groupCheckbox']) as FormGroup;

    if (!formGroupCheckbox) {
      return;
    } else {
      formGroupCheckbox.addControl(String(idx), this._fb.control(false))
    }
  }

  addHtmlAnswer(newAnswerNumber: number): void {
    const newAnswer = {
      placeholder: `Réponse ${newAnswerNumber}...`,
      name: `answer${newAnswerNumber}`,
      id: `answer${newAnswerNumber}`,
      value: '',
      isAnswer: false,
      checkbox: `checkbox${newAnswerNumber}`,
      formControl: `answer${newAnswerNumber}`
    };

    this.htmlAnswers = [...this.htmlAnswers, newAnswer];
  }

  addAnswerFormControl(newAnswerNumber: number): void {
    const newAnswerName: string = `answer${newAnswerNumber}`;

    this.formQuizz.addControl(
      newAnswerName,
      this._fb.control('', [Validators.minLength(1),Validators.required])
    );
  }

  checkAnswer(idx: number): void {
    let htmlAnswers = [...this.htmlAnswers];
    htmlAnswers[idx].isAnswer = !htmlAnswers[idx].isAnswer

    this.htmlAnswers = [...htmlAnswers];
  }
}
