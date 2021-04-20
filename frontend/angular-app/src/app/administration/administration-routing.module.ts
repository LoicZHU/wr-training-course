import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdministrationComponent} from "./administration.component";
import {AdminAuthGuardService} from "../shared/guards/admin-auth-guard/admin-auth-guard.service";
import {AdminLoginGuardService} from "../shared/guards/admin-login-guard/admin-login-guard.service";

const routes: Routes = [
  {path: '', component: AdministrationComponent, children: [
    {path: 'login', canActivate: [AdminLoginGuardService], component: LoginComponent},
    {path: 'edition', canLoad: [AdminAuthGuardService], loadChildren: () => import('./edition/edition.module').then(m => m.EditionModule)},
    {path: '', redirectTo: 'edition', pathMatch: 'full'},
  ]},
  {path: '**', redirectTo: 'edition'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminAuthGuardService],
})
export class AdministrationRoutingModule { }
