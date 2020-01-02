import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsPopupComponent } from './project-details-popup.component';

describe('ProjectDetailsPopupComponent', () => {
  let component: ProjectDetailsPopupComponent;
  let fixture: ComponentFixture<ProjectDetailsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
