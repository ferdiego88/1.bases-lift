import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesContactComponent } from './countries-contact.component';

describe('CountriesContactComponent', () => {
  let component: CountriesContactComponent;
  let fixture: ComponentFixture<CountriesContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesContactComponent]
    });
    fixture = TestBed.createComponent(CountriesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
