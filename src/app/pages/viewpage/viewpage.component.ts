import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpage',
  imports: [],
  templateUrl: './viewpage.component.html',
  styleUrl: './viewpage.component.css'
})
export class ViewpageComponent {

  user: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.user = nav?.extras?.state?.['user'];
  }

  backtoList() {
    this.router.navigateByUrl("/watertax-type");
  }
}
