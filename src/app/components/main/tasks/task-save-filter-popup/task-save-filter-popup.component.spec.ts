import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSaveFilterPopupComponent } from './task-save-filter-popup.component';

describe('TaskSaveFilterPopupComponent', () => {
  let component: TaskSaveFilterPopupComponent;
  let fixture: ComponentFixture<TaskSaveFilterPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSaveFilterPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSaveFilterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
