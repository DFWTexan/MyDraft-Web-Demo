import { TestBed } from '@angular/core/testing';

import { MydraftService } from './mydraft.service';

describe('MydraftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MydraftService = TestBed.get(MydraftService);
    expect(service).toBeTruthy();
  });
});
