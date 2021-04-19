import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModule} from "./lib/ui/components/components/components.module";
import { VideoComponent } from './video/video.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule} from "@angular/common/http";

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

  bootstrap: [AppComponent]
})
export class AppModule { }
