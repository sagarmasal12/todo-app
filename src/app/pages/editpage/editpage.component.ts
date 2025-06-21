import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpage',
  imports: [],
  templateUrl: './editpage.component.html',
  styleUrl: './editpage.component.css'
})
export class EditpageComponent {

  constructor(private router:Router){}
  onBacktolist(){
    this.router.navigateByUrl("/watertax-type")
  }
}
