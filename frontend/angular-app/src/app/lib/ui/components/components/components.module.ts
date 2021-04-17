import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiHeaderComponent} from "./ui-header/ui-header.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UiHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UiHeaderComponent
  ]
})
export class ComponentsModule { }
