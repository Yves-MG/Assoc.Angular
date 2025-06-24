import { TestBed } from '@angular/core/testing';

import { ResidentTransfertService } from './resident-transfert.service';

describe('ResidentTransfertService', () => {
  let service: ResidentTransfertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidentTransfertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
