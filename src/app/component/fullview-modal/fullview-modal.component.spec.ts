import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullviewModalComponent } from './fullview-modal.component';

describe('FullviewModalComponent', () => {
  let component: FullviewModalComponent;
  let fixture: ComponentFixture<FullviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullviewModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
