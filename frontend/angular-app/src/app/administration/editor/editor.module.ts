import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { CustomDropzonePreviewComponent } from './custom-dropzone-preview/custom-dropzone-preview.component';
import {NgxDropzoneModule} from "ngx-dropzone";


@NgModule({
  declarations: [CustomDropzonePreviewComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    NgxDropzoneModule
  ]
})
export class EditorModule { }
