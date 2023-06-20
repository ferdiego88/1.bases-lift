import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormControlComponent } from './input-form-control.component';

describe('InputFormControlComponent', () => {
  let component: InputFormControlComponent;
  let fixture: ComponentFixture<InputFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFormControlComponent]
    });
    fixture = TestBed.createComponent(InputFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
