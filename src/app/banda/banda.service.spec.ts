/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BandaService } from './banda.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Banda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BandaService]
    });
  });

  it('should ...', inject([BandaService], (service: BandaService) => {
    expect(service).toBeTruthy();
  }));
});
