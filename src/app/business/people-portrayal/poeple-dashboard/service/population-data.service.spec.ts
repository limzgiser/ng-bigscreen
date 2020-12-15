/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PopulationDataService } from './population-data.service';

describe('Service: PopulationData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulationDataService]
    });
  });

  it('should ...', inject([PopulationDataService], (service: PopulationDataService) => {
    expect(service).toBeTruthy();
  }));
});
