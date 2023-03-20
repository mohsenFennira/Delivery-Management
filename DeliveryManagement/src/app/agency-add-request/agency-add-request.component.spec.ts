import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyAddRequestComponent } from './agency-add-request.component';

describe('AgencyAddRequestComponent', () => {
  let component: AgencyAddRequestComponent;
  let fixture: ComponentFixture<AgencyAddRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyAddRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyAddRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
