import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTaxComponent } from './water-tax.component';

describe('WaterTaxComponent', () => {
  let component: WaterTaxComponent;
  let fixture: ComponentFixture<WaterTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterTaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
