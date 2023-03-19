import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardAgencyComponent } from './dasboard-agency.component';

describe('DasboardAgencyComponent', () => {
  let component: DasboardAgencyComponent;
  let fixture: ComponentFixture<DasboardAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboardAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
