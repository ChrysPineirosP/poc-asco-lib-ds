import { TestBed } from '@angular/core/testing';

import { PocStorybookLibService } from './poc-storybook-lib.service';

describe('PocStorybookLibService', () => {
  let service: PocStorybookLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocStorybookLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
