import { TestBed } from '@angular/core/testing';

import { DyncompService } from './dyncomp.service';

describe('DyncompService', () => {
  let service: DyncompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DyncompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
