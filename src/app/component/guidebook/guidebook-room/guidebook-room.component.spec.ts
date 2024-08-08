import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidebookRoomComponent } from './guidebook-room.component';

describe('GuidebookRoomComponent', () => {
  let component: GuidebookRoomComponent;
  let fixture: ComponentFixture<GuidebookRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidebookRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidebookRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
