/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductserviceService } from './Productservice.service';

describe('Service: Productservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductserviceService]
    });
  });

  it('should ...', inject([ProductserviceService], (service: ProductserviceService) => {
    expect(service).toBeTruthy();
  }));
});
