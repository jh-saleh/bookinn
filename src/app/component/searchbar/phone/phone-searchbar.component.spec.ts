import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSearchbarComponent } from './phone-searchbar.component';

describe('PhoneSearchbarComponent', () => {
  let component: PhoneSearchbarComponent;
  let fixture: ComponentFixture<PhoneSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneSearchbarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhoneSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
