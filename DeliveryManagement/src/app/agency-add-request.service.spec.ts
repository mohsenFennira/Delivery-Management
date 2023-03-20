import { TestBed } from '@angular/core/testing';

import { AgencyAddRequestService } from './agency-add-request.service';

describe('AgencyAddRequestService', () => {
  let service: AgencyAddRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgencyAddRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
