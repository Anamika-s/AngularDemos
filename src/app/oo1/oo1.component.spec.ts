import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oo1Component } from './oo1.component';

describe('Oo1Component', () => {
  let component: Oo1Component;
  let fixture: ComponentFixture<Oo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
