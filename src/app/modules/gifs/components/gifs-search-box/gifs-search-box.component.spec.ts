import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSearchBoxComponent } from './gifs-search-box.component';

describe('GifsSearchBoxComponent', () => {
  let component: GifsSearchBoxComponent;
  let fixture: ComponentFixture<GifsSearchBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifsSearchBoxComponent]
    });
    fixture = TestBed.createComponent(GifsSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
