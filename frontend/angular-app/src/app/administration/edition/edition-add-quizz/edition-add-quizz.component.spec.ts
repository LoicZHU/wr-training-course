import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionAddQuizzComponent } from './edition-add-quizz.component';

describe('EditionAddQuizzComponent', () => {
  let component: EditionAddQuizzComponent;
  let fixture: ComponentFixture<EditionAddQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionAddQuizzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionAddQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
