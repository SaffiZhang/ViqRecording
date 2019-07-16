import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTopMenubarComponent } from './app-top-menubar.component';

describe('AppTopMenubarComponent', () => {
  let component: AppTopMenubarComponent;
  let fixture: ComponentFixture<AppTopMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTopMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTopMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
