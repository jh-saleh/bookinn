import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullViewModalComponent } from './full-view-modal.component';

describe('FullViewClassicModalComponent', () => {
  let component: FullViewModalComponent;
  let fixture: ComponentFixture<FullViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullViewModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FullViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
