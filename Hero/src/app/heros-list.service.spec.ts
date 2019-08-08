import { TestBed } from '@angular/core/testing';

import { HerosListService } from './heros-list.service';

describe('HerosListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HerosListService = TestBed.get(HerosListService);
    expect(service).toBeTruthy();
  });
});
