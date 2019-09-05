import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactionEditingComponent } from './redaction-editing.component';

describe('RedactionEditingComponent', () => {
  let component: RedactionEditingComponent;
  let fixture: ComponentFixture<RedactionEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedactionEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedactionEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
