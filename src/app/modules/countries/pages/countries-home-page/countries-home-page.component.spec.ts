import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesHomePageComponent } from './countries-home-page.component';

describe('CountriesHomePageComponent', () => {
  let component: CountriesHomePageComponent;
  let fixture: ComponentFixture<CountriesHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesHomePageComponent]
    });
    fixture = TestBed.createComponent(CountriesHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
