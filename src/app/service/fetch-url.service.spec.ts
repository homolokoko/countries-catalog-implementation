import { TestBed } from '@angular/core/testing';

import { FetchUrlService } from './fetch-url.service';

describe('FetchUrlService', () => {
  let service: FetchUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
