import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionRoutingModule } from './edition-routing.module';
import { EditionAddContentComponent } from './edition-add-content/edition-add-content.component';
import { EditionAddQuizzComponent } from './edition-add-quizz/edition-add-quizz.component';
import { EditionAddVideoComponent } from './edition-add-video/edition-add-video.component';
import { EditionComponent } from './edition.component';
import { EditionCourseComponent } from './edition-course/edition-course.component';
import {ComponentsModule} from "../../lib/ui/components/components/components.module";
import {NgxDropzoneModule} from "ngx-dropzone";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    EditionAddContentComponent,
    EditionAddQuizzComponent,
    EditionAddVideoComponent,
    EditionComponent,
    EditionCourseComponent,
  ],
  imports: [
    CommonModule,
    EditionRoutingModule,
    ComponentsModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EditionModule { }
