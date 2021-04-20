import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'administration', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)},
  {path: 'formation', loadChildren: () => import('./course/course.module').then(m => m.CourseModule)},
  {path: '', redirectTo: 'formation', pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
