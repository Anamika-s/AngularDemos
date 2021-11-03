import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOcompComponent } from './new-ocomp.component';

describe('NewOcompComponent', () => {
  let component: NewOcompComponent;
  let fixture: ComponentFixture<NewOcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
