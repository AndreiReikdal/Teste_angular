import { TestBed } from '@angular/core/testing';

import { Sr1Service } from './sr1.service';

describe('Sr1Service', () => {
  let service: Sr1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sr1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
