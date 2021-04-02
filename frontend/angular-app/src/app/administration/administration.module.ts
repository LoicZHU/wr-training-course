import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';
import { AdministrationComponent } from './administration.component';
import {EditorAddLessonComponent} from "./editor/editor-add-lesson/editor-add-lesson.component";
import {EditorHeaderComponent} from "./editor/editor-header/editor-header.component";
import {ComponentsModule} from "../lib/ui/components/components/components.module";
import {NgxDropzoneModule} from "ngx-dropzone";

@NgModule({
  declarations: [
    LoginComponent,
    EditorComponent,
    AdministrationComponent,
    EditorAddLessonComponent,
    EditorHeaderComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    ComponentsModule,
    NgxDropzoneModule,
  ],
})
export class AdministrationModule { }
