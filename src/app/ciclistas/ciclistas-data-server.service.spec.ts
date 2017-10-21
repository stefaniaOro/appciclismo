import { TestBed, inject } from '@angular/core/testing';

import { CiclistasDataServerService } from './ciclistas-data-server.service';

describe('CiclistasDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CiclistasDataServerService]
    });
  });

  it('should be created', inject([CiclistasDataServerService], (service: CiclistasDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
