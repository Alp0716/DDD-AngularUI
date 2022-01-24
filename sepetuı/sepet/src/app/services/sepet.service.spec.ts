/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SepetService } from './sepet.service';

describe('Service: Sepet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SepetService]
    });
  });

  it('should ...', inject([SepetService], (service: SepetService) => {
    expect(service).toBeTruthy();
  }));
});
