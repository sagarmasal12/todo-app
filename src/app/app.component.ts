import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WaterTaxComponent } from "./pages/water-tax/water-tax.component";
import { WatertaxTypeComponent } from "./pages/watertax-type/watertax-type.component";
import { WatertaxFormComponent } from './pages/watertax-form/watertax-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'water-tax';
}
