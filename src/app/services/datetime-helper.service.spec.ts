import { TestBed } from '@angular/core/testing';

import { DatetimeHelperService } from './datetime-helper.service';

describe('DatetimeHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatetimeHelperService = TestBed.get(DatetimeHelperService);
    expect(service).toBeTruthy();
  });
});
