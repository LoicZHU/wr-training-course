import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionAddVideoComponent } from './edition-add-video.component';

describe('EditionAddVideoComponent', () => {
  let component: EditionAddVideoComponent;
  let fixture: ComponentFixture<EditionAddVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionAddVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionAddVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
