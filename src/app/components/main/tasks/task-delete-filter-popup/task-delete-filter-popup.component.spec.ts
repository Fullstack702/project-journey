import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeleteFilterPopupComponent } from './task-delete-filter-popup.component';

describe('TaskDeleteFilterPopupComponent', () => {
  let component: TaskDeleteFilterPopupComponent;
  let fixture: ComponentFixture<TaskDeleteFilterPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDeleteFilterPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDeleteFilterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
