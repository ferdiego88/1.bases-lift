import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSidebarComponent } from './gifs-sidebar.component';

describe('GifsSidebarComponent', () => {
  let component: GifsSidebarComponent;
  let fixture: ComponentFixture<GifsSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifsSidebarComponent]
    });
    fixture = TestBed.createComponent(GifsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
