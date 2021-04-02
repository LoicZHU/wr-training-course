import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'edition', loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule)},
  {path: '', redirectTo: 'edition', pathMatch: 'full'},
  {path: '**', redirectTo: 'edition', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
