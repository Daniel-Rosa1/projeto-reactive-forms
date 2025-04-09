import { TestBed } from '@angular/core/testing';

import { StatiesService } from './states.service';

describe('StatiesService', () => {
  let service: StatiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
