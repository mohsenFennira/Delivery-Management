import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyListRequestComponent } from './agency-list-request.component';

describe('AgencyListRequestComponent', () => {
  let component: AgencyListRequestComponent;
  let fixture: ComponentFixture<AgencyListRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyListRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyListRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
