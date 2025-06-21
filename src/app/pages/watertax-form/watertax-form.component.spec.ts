import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatertaxFormComponent } from './watertax-form.component';

describe('WatertaxFormComponent', () => {
  let component: WatertaxFormComponent;
  let fixture: ComponentFixture<WatertaxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatertaxFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatertaxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
