import { TestBed } from '@angular/core/testing';

import { UsuariosservicesService } from './usuariosservices.service';

describe('UsuariosservicesService', () => {
  let service: UsuariosservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
