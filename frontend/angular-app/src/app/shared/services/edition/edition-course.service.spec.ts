import { TestBed } from '@angular/core/testing';

import { EditionCourseService } from './edition-course.service';

describe('EditionCourseService', () => {
  let service: EditionCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditionCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
