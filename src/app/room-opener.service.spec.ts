import { TestBed, inject } from '@angular/core/testing';

import { RoomOpenerService } from './room-opener.service';

describe('RoomOpenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomOpenerService]
    });
  });

  it('should be created', inject([RoomOpenerService], (service: RoomOpenerService) => {
    expect(service).toBeTruthy();
  }));
});
