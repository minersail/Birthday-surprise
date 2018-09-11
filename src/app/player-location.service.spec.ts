import { TestBed, inject } from '@angular/core/testing';

import { PlayerLocationService } from './player-location.service';

describe('PlayerLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerLocationService]
    });
  });

  it('should be created', inject([PlayerLocationService], (service: PlayerLocationService) => {
    expect(service).toBeTruthy();
  }));
});
