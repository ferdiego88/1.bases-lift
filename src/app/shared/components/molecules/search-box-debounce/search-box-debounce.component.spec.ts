import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxDebounceComponent } from './search-box-debounce.component';

describe('SearchBoxDebounceComponent', () => {
  let component: SearchBoxDebounceComponent;
  let fixture: ComponentFixture<SearchBoxDebounceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBoxDebounceComponent]
    });
    fixture = TestBed.createComponent(SearchBoxDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
