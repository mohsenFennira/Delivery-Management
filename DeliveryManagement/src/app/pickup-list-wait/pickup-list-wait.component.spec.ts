import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupListWaitComponent } from './pickup-list-wait.component';

describe('PickupListWaitComponent', () => {
  let component: PickupListWaitComponent;
  let fixture: ComponentFixture<PickupListWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupListWaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupListWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
