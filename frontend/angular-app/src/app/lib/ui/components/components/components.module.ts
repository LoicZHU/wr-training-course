import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiHeaderComponent} from "./ui-header/ui-header.component";

@NgModule({
  declarations: [
    UiHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiHeaderComponent
  ]
})
export class ComponentsModule { }
