import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeMenuBarComponent } from './prime-menu-bar.component';

describe('PrimeMenuBarComponent', () => {
  let component: PrimeMenuBarComponent;
  let fixture: ComponentFixture<PrimeMenuBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeMenuBarComponent]
    });
    fixture = TestBed.createComponent(PrimeMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
