import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterService', () => {
  let service: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterService],
    });
    service = TestBed.inject(RegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
