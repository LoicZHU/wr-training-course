import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditionComponent} from "./edition.component";
import {AdminAuthGuardService} from "../../shared/guards/admin-auth-guard/admin-auth-guard.service";

const routes: Routes = [
  {path: 'course', component: EditionComponent, children: [
      // {path: ':id', component: EditionComponent}
  ]},
  {path: '', canActivate: [AdminAuthGuardService], component: EditionComponent},
  {path: '**', canActivate: [AdminAuthGuardService] , component: EditionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminAuthGuardService],
})
export class EditionRoutingModule { }
