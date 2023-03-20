import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyListPickupComponent } from './agency-list-pickup.component';

describe('AgencyListPickupComponent', () => {
  let component: AgencyListPickupComponent;
  let fixture: ComponentFixture<AgencyListPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyListPickupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyListPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
