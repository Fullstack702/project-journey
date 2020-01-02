import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFilterPopupComponent } from './task-filter-popup.component';

describe('TaskFilterPopupComponent', () => {
  let component: TaskFilterPopupComponent;
  let fixture: ComponentFixture<TaskFilterPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFilterPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFilterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
