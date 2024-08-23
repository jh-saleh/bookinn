import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedInputComponent } from './animated-input.component';

describe('AnimatedInputComponent', () => {
  let component: AnimatedInputComponent;
  let fixture: ComponentFixture<AnimatedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
