import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerListRequestComponent } from './freelancer-list-request.component';

describe('FreelancerListRequestComponent', () => {
  let component: FreelancerListRequestComponent;
  let fixture: ComponentFixture<FreelancerListRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerListRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerListRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
