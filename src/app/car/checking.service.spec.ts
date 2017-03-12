/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckingService } from './checking.service';

describe('CheckingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckingService]
    });
  });

  it('should ...', inject([CheckingService], (service: CheckingService) => {
    expect(service).toBeTruthy();
  }));
});
