import { TestBed } from '@angular/core/testing';

import { WatertaxServiceService } from './watertax-service.service';

describe('WatertaxServiceService', () => {
  let service: WatertaxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatertaxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
