import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengeComponent } from './messenge.component';

describe('MessengeComponent', () => {
  let component: MessengeComponent;
  let fixture: ComponentFixture<MessengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
