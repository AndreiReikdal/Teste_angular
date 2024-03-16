import { TestBed } from '@angular/core/testing';

import { Sr2Service } from './sr2.service';

describe('Sr2Service', () => {
  let service: Sr2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sr2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
