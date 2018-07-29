/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataStoreService } from './dataStore.service';

describe('Service: DataStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStoreService]
    });
  });

  it('should ...', inject([DataStoreService], (service: DataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
