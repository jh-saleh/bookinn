import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSearchbarComponent } from './desktop-searchbar.component';

describe('DesktopSearchbarComponent', () => {
  let component: DesktopSearchbarComponent;
  let fixture: ComponentFixture<DesktopSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopSearchbarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DesktopSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
