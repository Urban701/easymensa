import { TestBed } from '@angular/core/testing';

import { MenuPlanService } from './menu-plan.service';

describe('MenuPlanService', () => {
  let service: MenuPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
