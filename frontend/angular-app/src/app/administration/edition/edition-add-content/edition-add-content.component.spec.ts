import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionAddContentComponent } from './edition-add-content.component';

describe('EditionAddContentComponent', () => {
  let component: EditionAddContentComponent;
  let fixture: ComponentFixture<EditionAddContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionAddContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionAddContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
