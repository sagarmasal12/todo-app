import { TestBed } from '@angular/core/testing';

import { VehicleSrvService } from './vehicle-srv.service';

describe('VehicleSrvService', () => {
  let service: VehicleSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
