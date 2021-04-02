import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorAddLessonComponent } from './editor-add-lesson.component';

describe('EditorAddLessonComponent', () => {
  let component: EditorAddLessonComponent;
  let fixture: ComponentFixture<EditorAddLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorAddLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorAddLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
