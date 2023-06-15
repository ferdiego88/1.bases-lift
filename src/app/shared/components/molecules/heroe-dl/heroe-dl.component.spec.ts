import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeDlComponent } from './heroe-dl.component';

describe('HeroeDlComponent', () => {
  let component: HeroeDlComponent;
  let fixture: ComponentFixture<HeroeDlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeDlComponent]
    });
    fixture = TestBed.createComponent(HeroeDlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
