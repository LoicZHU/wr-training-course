import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdministrationComponent} from "./administration.component";

const routes: Routes = [
  {path: '', component: AdministrationComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'edition', loadChildren: () => import('./edition/edition.module').then(m => m.EditionModule)},
    {path: '', redirectTo: 'edition', pathMatch: 'full'},
  ]},
  {path: '**', redirectTo: 'edition', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
