import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { LoginComponent } from './login/login.component';
import { AdministrationComponent } from './administration.component';
import {ComponentsModule} from "../lib/ui/components/components/components.module";
import {NgxDropzoneModule} from "ngx-dropzone";
import {EditionModule} from "./edition/edition.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RequestInterceptorService} from "../shared/interceptors/request-interceptor.service";

@NgModule({
  declarations: [
    LoginComponent,
    AdministrationComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    ComponentsModule,
    EditionModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true},
  ],
  exports: [
  ]
})
export class AdministrationModule { }
