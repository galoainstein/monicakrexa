import { TestBed } from '@angular/core/testing';

import { ScssImportsService } from './scss-imports.service';

describe('ScssImportsService', () => {
  let service: ScssImportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScssImportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
