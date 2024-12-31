import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeroesComponent } from './main-heroes.component';

describe('MainHeroesComponent', () => {
  let component: MainHeroesComponent;
  let fixture: ComponentFixture<MainHeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainHeroesComponent]
    });
    fixture = TestBed.createComponent(MainHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
