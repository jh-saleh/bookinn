import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBillRoomComponent } from './phone-bill-room.component';

describe('PhoneBillRoomComponent', () => {
  let component: PhoneBillRoomComponent;
  let fixture: ComponentFixture<PhoneBillRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneBillRoomComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhoneBillRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
