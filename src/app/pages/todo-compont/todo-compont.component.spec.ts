import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCompontComponent } from './todo-compont.component';

describe('TodoCompontComponent', () => {
  let component: TodoCompontComponent;
  let fixture: ComponentFixture<TodoCompontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCompontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCompontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
