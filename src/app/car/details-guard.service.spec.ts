/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailsGuardService } from './details-guard.service';

describe('DetailsGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsGuardService]
    });
  });

  it('should ...', inject([DetailsGuardService], (service: DetailsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
