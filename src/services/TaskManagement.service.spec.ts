/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskManagementService } from './TaskManagement.service';

describe('Service: TaskManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskManagementService]
    });
  });

  it('should ...', inject([TaskManagementService], (service: TaskManagementService) => {
    expect(service).toBeTruthy();
  }));
});
