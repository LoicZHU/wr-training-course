import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from "./course.component";
import {VideoComponent} from "../video/video.component";
import {QuizComponent} from "../quiz/quiz.component";

const routes: Routes = [
  {path: '', component: CourseComponent, children: [
    {path: 'lecon', component: VideoComponent},
    {path: 'quiz', component: QuizComponent},
    {path: '', redirectTo: 'lecon', pathMatch: 'full'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
