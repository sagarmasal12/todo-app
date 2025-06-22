import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatertaxTypeComponent } from './watertax-type.component';

describe('WatertaxTypeComponent', () => {
  let component: WatertaxTypeComponent;
  let fixture: ComponentFixture<WatertaxTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatertaxTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatertaxTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
