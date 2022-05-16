import { TestBed } from '@angular/core/testing';

import { PathScrollService } from './path-scroll.service';

describe('PathScrollService', () => {
  let service: PathScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
