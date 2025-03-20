import { TestBed } from '@angular/core/testing';

import { CommentServiceTestService } from './comment-service-test.service';

describe('CommentServiceTestService', () => {
  let service: CommentServiceTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentServiceTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
