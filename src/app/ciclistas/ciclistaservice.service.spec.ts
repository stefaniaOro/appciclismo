import { TestBed, inject } from '@angular/core/testing';

import { Ciclistaservice} from './ciclistaservice.service';

describe('CiclistaserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ciclistaservice]
    });
  });

  it('should be created', inject([Ciclistaservice], (service: Ciclistaservice) => {
    expect(service).toBeTruthy();
  }));
});
