import { Component } from '@angular/core';
import { Task2Component } from "../task2/task2.component";
import { Task3Component } from "../task3/task3.component";

@Component({
  selector: 'app-task1',
  imports: [],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css'
})
export class Task1Component {

  onClick(){
    alert("Button Clicked")
  }
}
