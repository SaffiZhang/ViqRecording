import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseUploadMediaComponent } from './create-case-upload-media.component';

describe('CreateCaseUploadMediaComponent', () => {
  let component: CreateCaseUploadMediaComponent;
  let fixture: ComponentFixture<CreateCaseUploadMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseUploadMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseUploadMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
