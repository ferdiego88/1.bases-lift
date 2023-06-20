import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGifsComponent } from './main-gifs.component';

describe('MainGifsComponent', () => {
  let component: MainGifsComponent;
  let fixture: ComponentFixture<MainGifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainGifsComponent]
    });
    fixture = TestBed.createComponent(MainGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
