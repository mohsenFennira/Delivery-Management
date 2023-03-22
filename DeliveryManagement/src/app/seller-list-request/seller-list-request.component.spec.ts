import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerListRequestComponent } from './seller-list-request.component';

describe('SellerListRequestComponent', () => {
  let component: SellerListRequestComponent;
  let fixture: ComponentFixture<SellerListRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerListRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerListRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
