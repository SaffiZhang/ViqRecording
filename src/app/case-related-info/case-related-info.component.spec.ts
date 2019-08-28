import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseRelatedInfoComponent } from './case-related-info.component';

describe('CaseRelatedInfoComponent', () => {
  let component: CaseRelatedInfoComponent;
  let fixture: ComponentFixture<CaseRelatedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseRelatedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseRelatedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
