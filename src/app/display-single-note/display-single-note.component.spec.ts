import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySingleNoteComponent } from './display-single-note.component';

describe('DisplaySingleNoteComponent', () => {
  let component: DisplaySingleNoteComponent;
  let fixture: ComponentFixture<DisplaySingleNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySingleNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySingleNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
