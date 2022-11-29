import { TestBed } from '@angular/core/testing';

import { DoencaService } from './doenca.service';

describe('DoencaService', () => {
  let service: DoencaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoencaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
