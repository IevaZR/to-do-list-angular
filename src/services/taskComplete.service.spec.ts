/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskCompleteService } from './taskComplete.service';

describe('Service: TaskComplete', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskCompleteService]
    });
  });

  it('should ...', inject([TaskCompleteService], (service: TaskCompleteService) => {
    expect(service).toBeTruthy();
  }));
});
