import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillRoomComponent } from './bill-room.component';

describe('BillRoomComponent', () => {
  let component: BillRoomComponent;
  let fixture: ComponentFixture<BillRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
