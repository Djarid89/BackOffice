import { TestBed } from '@angular/core/testing';

import { ItemsConteinerServices } from './products.service';

describe('ItemsConteinerServicesService', () => {
  let service: ItemsConteinerServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsConteinerServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
