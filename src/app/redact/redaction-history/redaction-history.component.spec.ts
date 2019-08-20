import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactionHistoryComponent } from './redaction-history.component';

describe('RedactionHistoryComponent', () => {
  let component: RedactionHistoryComponent;
  let fixture: ComponentFixture<RedactionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedactionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
