import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCounterComponent } from './basic-counter.component';

describe('BasicCounterComponent', () => {
  let component: BasicCounterComponent;
  let fixture: ComponentFixture<BasicCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicCounterComponent]
    });
    fixture = TestBed.createComponent(BasicCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
