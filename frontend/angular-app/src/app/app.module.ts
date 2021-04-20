import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModule} from "./lib/ui/components/components/components.module";
import { VideoComponent } from './video/video.component';
import { QuizComponent } from './quiz/quiz.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RequestInterceptorService} from "./shared/interceptors/request-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
