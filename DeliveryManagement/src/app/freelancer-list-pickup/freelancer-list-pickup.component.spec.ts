import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerListPickupComponent } from './freelancer-list-pickup.component';

describe('FreelancerListPickupComponent', () => {
  let component: FreelancerListPickupComponent;
  let fixture: ComponentFixture<FreelancerListPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerListPickupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerListPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
