import { Component } from '@angular/core';
import { Task1Component } from "../task1/task1.component";
import { Task2Component } from "../task2/task2.component";
import { Task3Component } from "../task3/task3.component";

@Component({
  selector: 'app-event-home',
  imports: [Task1Component, Task2Component, Task3Component],
  templateUrl: './event-home.component.html',
  styleUrl: './event-home.component.css'
})
export class EventHomeComponent {

}
