import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionCourseComponent } from './edition-course.component';

describe('EditionCourseComponent', () => {
  let component: EditionCourseComponent;
  let fixture: ComponentFixture<EditionCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
