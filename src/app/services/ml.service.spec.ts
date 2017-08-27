import { TestBed, inject } from '@angular/core/testing';

import { MLService } from './ml.service';

describe('MLService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MLService]
    });
  });

  it('should be created', inject([MLService], (service: MLService) => {
    expect(service).toBeTruthy();
  }));
});
