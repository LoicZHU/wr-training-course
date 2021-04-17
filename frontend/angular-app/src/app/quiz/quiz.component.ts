import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  // answerClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // onClick(): void {
  //   this.answerClicked = !this.answerClicked;
  // }
}
