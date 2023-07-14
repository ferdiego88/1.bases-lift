import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesAboutComponent } from './countries-about.component';

describe('CountriesAboutComponent', () => {
  let component: CountriesAboutComponent;
  let fixture: ComponentFixture<CountriesAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesAboutComponent]
    });
    fixture = TestBed.createComponent(CountriesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
