import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditionComponent} from "./edition.component";

const routes: Routes = [
  {path: 'course', component: EditionComponent, children: [
      {path: ':id', component: EditionComponent}
  ]},
  {path: '', component: EditionComponent},
  {path: '**', component: EditionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditionRoutingModule { }
