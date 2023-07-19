import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDebounceTextComponent } from './input-debounce-text.component';

describe('InputDebounceTextComponent', () => {
  let component: InputDebounceTextComponent;
  let fixture: ComponentFixture<InputDebounceTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDebounceTextComponent]
    });
    fixture = TestBed.createComponent(InputDebounceTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
