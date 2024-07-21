import { TestBed } from '@angular/core/testing';

import { CalendarDatesService } from './calendar-dates.service';

describe('CalendarDatesService', () => {
  let service: CalendarDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
