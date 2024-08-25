import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillReservationStayComponent } from './bill-reservation-stay.component';

describe('BillReservationStayComponent', () => {
  let component: BillReservationStayComponent;
  let fixture: ComponentFixture<BillReservationStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillReservationStayComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BillReservationStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});