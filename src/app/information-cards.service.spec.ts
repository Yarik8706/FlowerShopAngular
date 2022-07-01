import { TestBed } from '@angular/core/testing';

import { InformationCardsService } from './information-cards.service';

describe('InformationCardsService', () => {
  let service: InformationCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
