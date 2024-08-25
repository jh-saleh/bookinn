import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayReservationPageComponent } from './stay-reservation-page.component';

describe('ReservationPageComponent', () => {
  let component: StayReservationPageComponent;
  let fixture: ComponentFixture<StayReservationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayReservationPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StayReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
