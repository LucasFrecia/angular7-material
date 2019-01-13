import { TestBed, inject } from '@angular/core/testing';

import { CompetitorsService } from './competitors.service';

describe('CompetitorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetitorsService]
    });
  });

  it('should be created', inject([CompetitorsService], (service: CompetitorsService) => {
    expect(service).toBeTruthy();
  }));
});
