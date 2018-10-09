import { TestBed, inject } from '@angular/core/testing';

import { PortfolioService } from './portfolio.service';

describe('PortfolioServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioService]
    });
  });

  it('should be created', inject([PortfolioService], (service: PortfolioService) => {
    expect(service).toBeTruthy();
  }));
});
