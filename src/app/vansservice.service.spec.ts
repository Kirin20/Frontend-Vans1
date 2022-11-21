import { TestBed } from '@angular/core/testing';

import { VansserviceService } from './vansservice.service';

describe('VansserviceService', () => {
  let service: VansserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VansserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
