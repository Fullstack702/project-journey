import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseSavePopupComponent } from './release-save-popup.component';

describe('ReleaseSavePopupComponent', () => {
  let component: ReleaseSavePopupComponent;
  let fixture: ComponentFixture<ReleaseSavePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseSavePopupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseSavePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
