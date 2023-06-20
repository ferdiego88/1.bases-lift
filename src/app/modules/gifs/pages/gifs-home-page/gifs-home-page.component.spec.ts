import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsHomePageComponent } from './gifs-home-page.component';

describe('GifsHomePageComponent', () => {
  let component: GifsHomePageComponent;
  let fixture: ComponentFixture<GifsHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifsHomePageComponent]
    });
    fixture = TestBed.createComponent(GifsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
