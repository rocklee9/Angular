import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buoi4Component } from './buoi4.component';

describe('Buoi4Component', () => {
  let component: Buoi4Component;
  let fixture: ComponentFixture<Buoi4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buoi4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buoi4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
