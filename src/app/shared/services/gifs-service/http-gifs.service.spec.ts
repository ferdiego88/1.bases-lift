import { TestBed } from '@angular/core/testing';

import { HttpGifsService } from './http-gifs.service';

describe('HttpGifsService', () => {
  let service: HttpGifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
