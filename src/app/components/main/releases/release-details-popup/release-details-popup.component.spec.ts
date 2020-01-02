import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDetailsPopupComponent } from './release-details-popup.component';

describe('ReleaseDetailsPopupComponent', () => {
  let component: ReleaseDetailsPopupComponent;
  let fixture: ComponentFixture<ReleaseDetailsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseDetailsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
