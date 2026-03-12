import { TestBed } from '@angular/core/testing';

import { ItemsState } from './items-state';

describe('ItemsState', () => {
  let service: ItemsState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
