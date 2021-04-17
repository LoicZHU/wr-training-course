import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditionCourseService} from "../../../shared/services/edition/edition-course.service";
import {RejectedFile} from "ngx-dropzone/lib/ngx-dropzone.service";
import {FileUtilsService} from "../../../shared/services/file/file-utils.service";

@Component({
  selector: 'app-edition-add-video',
  templateUrl: './edition-add-video.component.html',
  styleUrls: ['./edition-add-video.component.scss']
})
export class EditionAddVideoComponent implements OnInit {
  videoAdded: boolean = false;
  videoRejected: boolean = false;
  youtubeUrlAdded: boolean = false;
  file: File[] = [];
  formVideo!: FormGroup;
  maxFileSize: number = 1073741824;

  @Output() saved: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _fb: FormBuilder,
    private _editionCourseService: EditionCourseService,
    private _fileUtilsService: FileUtilsService,
  ) { }

  ngOnInit(): void {
    this.initFormVideo();
  }

  initFormVideo(): void {
    const urlRe = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

    this.formVideo = this._fb.group({
      title: this._fb.control('', [Validators.minLength(1), Validators.required]),
      youtubeUrl: this._fb.control({value: null, disabled: this.videoAdded}, [Validators.minLength(1), Validators.pattern(urlRe)]),
      video: this._fb.control({value: null, disabled: this.youtubeUrlAdded}),
    });
  }

  onSubmit(): void {
    this.saveForm();
  }

  closeForm(): void {
    this.saved.emit()
  }

  saveForm(): void {
    if (this.formVideo.invalid) {
      return;
    } else {
      const youtubeUrlControl = this.formVideo.controls.youtubeUrl

      if (!youtubeUrlControl.value) {
        this.formVideo.setControl('youtubeUrl', this._fb.control({value: null, disabled: false}))
      } else {
        youtubeUrlControl.patchValue(youtubeUrlControl.value.trim())
      }

      this._editionCourseService.setForm({formName: 'formVideo', formValues: this.formVideo.value});
      this.closeForm();
    }
  }

  formatBytes(bytes: number, decimals = 2): string {
    return this._fileUtilsService.formatBytes(bytes, decimals)
  }

  checkValue() {
    !this.formVideo.get('youtubeUrl')!.value.trim()
      ? this.youtubeUrlAdded = false
      : this.youtubeUrlAdded = true;
  }

  onSelect(event: { addedFiles: File[], rejectedFiles: RejectedFile[] }): void {
    if (this.file.length >= 1) {
      this.videoRejected = false;
      this.file = event.addedFiles;
    } else {
      if (event.rejectedFiles.length >= 1) {
        this.videoRejected = true;
      } else {
        this.videoRejected = false;
        this.file.push(event.addedFiles[0]);
      }
    }

    this.videoAdded = (this.file.length >= 1);

    if (!this.videoAdded) {
      this.videoRejected = false;
    } else {
      this.formVideo.get('video')!.patchValue(event.addedFiles[0]);
      this.formVideo.get('youtubeUrl')!.disable();
      console.log(this.videoAdded)
    }
  }

  onRemove(event: File): void {
    this.file.splice(this.file.indexOf(event), 1);
    this.videoAdded = (this.file.length >= 1);

    this.formVideo.get('youtubeUrl')!.enable();
  }
}
