import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Frame2Component } from './frame2.component';

describe('Frame2Component', () => {
  let component: Frame2Component;
  let fixture: ComponentFixture<Frame2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frame2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Frame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
