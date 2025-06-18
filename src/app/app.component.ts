import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventHomeComponent } from "./pages/Event/event-home/event-home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
}
