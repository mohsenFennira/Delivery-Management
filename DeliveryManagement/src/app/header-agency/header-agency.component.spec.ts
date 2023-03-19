import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAgencyComponent } from './header-agency.component';

describe('HeaderAgencyComponent', () => {
  let component: HeaderAgencyComponent;
  let fixture: ComponentFixture<HeaderAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
