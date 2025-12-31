import { TestBed } from '@angular/core/testing';

import { FlagsService } from './flags.service';

describe('FlagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlagsService = TestBed.inject(FlagsService);
    expect(service).toBeTruthy();
  });
});
