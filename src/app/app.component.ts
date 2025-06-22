import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
=======
import { RouterOutlet } from '@angular/router';
import { WaterTaxComponent } from "./pages/water-tax/water-tax.component";
import { WatertaxTypeComponent } from "./pages/watertax-type/watertax-type.component";
import { WatertaxFormComponent } from './pages/watertax-form/watertax-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
>>>>>>> view-watertax
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  title = 'todo-app';
=======
  title = 'water-tax';
>>>>>>> view-watertax
}
