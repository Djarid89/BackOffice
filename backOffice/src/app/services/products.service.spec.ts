import { TestBed } from '@angular/core/testing';

import { ProductsServices } from './products.service';

describe('ItemsConteinerServicesService', () => {
  let service: ProductsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
