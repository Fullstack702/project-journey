import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDetailsPopupComponent } from './board-details-popup.component';

describe('BoardDetailsPopupComponent', () => {
  let component: BoardDetailsPopupComponent;
  let fixture: ComponentFixture<BoardDetailsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDetailsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
