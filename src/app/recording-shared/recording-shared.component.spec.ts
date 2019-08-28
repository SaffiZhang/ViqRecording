import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingSharedComponent } from './recording-shared.component';

describe('RecordingSharedComponent', () => {
  let component: RecordingSharedComponent;
  let fixture: ComponentFixture<RecordingSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordingSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordingSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
