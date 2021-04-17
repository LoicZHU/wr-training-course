import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditionCourseService} from "../../../shared/services/edition/edition-course.service";
import {RejectedFile} from "ngx-dropzone/lib/ngx-dropzone.service";
import {FileUtilsService} from "../../../shared/services/file/file-utils.service";

@Component({
  selector: 'app-edition-add-content',
  templateUrl: './edition-add-content.component.html',
  styleUrls: ['./edition-add-content.component.scss']
})
export class EditionAddContentComponent implements OnInit {
  positionings: {id: string, name: string, checked: boolean, for: string, value: string}[] = [
    {id: 'left', name: 'left', checked: false, for: 'left', value: 'Gauche'},
    {id: 'right', name: 'right', checked: true, for: 'right', value: 'Droite'},
  ];
  file: File[] = [];
  formContent!: FormGroup;
  imageAdded: boolean = false;
  imageRejected: boolean = false;
  maxFileSize: number = 10485760;

  @Output() saved: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _fb: FormBuilder,
    private _editionCourseService: EditionCourseService,
    private _fileUtilsService: FileUtilsService,
  ) { }

  ngOnInit(): void {
    this.initFormContent()
  }

  initFormContent(): void {
    this.formContent = this._fb.group({
      title: this._fb.control('', [Validators.minLength(1), Validators.required]),
      content: this._fb.control('', [Validators.minLength(1), Validators.required]),
      backgroundColor: this._fb.control('', [
        Validators.minLength(7),
        Validators.maxLength(7),
        Validators.pattern(/^#[a-zA-Z0-9]{6}/g),
      ]),
      imagePosition: this._fb.control('Droite'),
    })
  }

  formatBytes(bytes: number, decimals = 2): string {
    return this._fileUtilsService.formatBytes(bytes, decimals)
  }

  onSubmit(): void {
    this.patchBackgroundColorControl()
    this.patchImagePosition()
    this.saveForm()
  }

  closeForm(): void {
    this.saved.emit()
  }

  patchImagePosition(): void {
    const chosenPosition = this.positionings.find(function checked(position) {
      return position.checked === true
    })

    if (!chosenPosition) {
      return
    } else {
      this.formContent.get('imagePosition')!.patchValue(chosenPosition.value)
    }
  }

  patchBackgroundColorControl(): void {
    if (this.formContent.get('backgroundColor')!.value !== '') {
      return;
    } else {
      this.formContent.get('backgroundColor')!.patchValue('#FFFFFF')
    }
  }

  saveForm(): void {
    if (this.formContent.invalid) {
      return;
    } else {
      this._editionCourseService.setForm({formName: 'formContent', formValues: this.formContent.value})
      this.closeForm()
    }
  }

  onSelect(event: { addedFiles: File[], rejectedFiles: RejectedFile[] }): void{
    if (this.file.length >= 1) {
      this.imageRejected = false;
      this.file = event.addedFiles;
    } else {
      if (event.rejectedFiles.length >= 1) {
        this.imageRejected = true;
      } else {
        this.imageRejected = false;
        this.file.push(event.addedFiles[0]);
      }
    }

    this.imageAdded = (this.file.length >= 1);
  }

  onRemove(event: File): void {
    this.file.splice(this.file.indexOf(event), 1);
    this.imageAdded = (this.file.length >= 1);
  }

  choosePosition(idx: number): void {
    let positionings = [...this.positionings];

    if (!positionings[idx].checked) {
      positionings = positionings.map(function resetEveryPositioning(positioning) {
        return Object.assign({}, positioning, positioning.checked = false)
      })

      positionings[idx] = {...positionings[idx], checked: true};
    } else {
      positionings[idx] = {...positionings[idx], checked: true};
    }

    this.positionings = [...positionings];
  }
}
