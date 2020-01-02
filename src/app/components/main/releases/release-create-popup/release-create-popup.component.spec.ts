import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseCreatePopupComponent } from './release-create-popup.component';

describe('ReleaseCreatePopupComponent', () => {
  let component: ReleaseCreatePopupComponent;
  let fixture: ComponentFixture<ReleaseCreatePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseCreatePopupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseCreatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
