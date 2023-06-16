import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupItemComponent } from './list-group-item.component';

describe('ListGroupItemComponent', () => {
  let component: ListGroupItemComponent;
  let fixture: ComponentFixture<ListGroupItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGroupItemComponent]
    });
    fixture = TestBed.createComponent(ListGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
