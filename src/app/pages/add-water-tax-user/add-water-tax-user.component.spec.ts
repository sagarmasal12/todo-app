import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWaterTaxUserComponent } from './add-water-tax-user.component';

describe('AddWaterTaxUserComponent', () => {
  let component: AddWaterTaxUserComponent;
  let fixture: ComponentFixture<AddWaterTaxUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWaterTaxUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWaterTaxUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
