import { TestBed } from '@angular/core/testing';

import { DabService } from './dab.service';

describe('DabService', () => {
  let service: DabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
