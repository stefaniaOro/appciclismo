import { TestBed, inject } from '@angular/core/testing';

import { RutasDataServerService } from './rutas-data-server.service';

describe('RutasDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RutasDataServerService]
    });
  });

  it('should be created', inject([RutasDataServerService], (service: RutasDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
