import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { waterTaxstatus } from '../models/water-tax';
import { WatertaxServiceService } from '../service/watertax-service.service';

@Component({
  selector: 'app-viewpage',
  imports: [],
  templateUrl: './viewpage.component.html',
  styleUrl: './viewpage.component.css'
})
export class ViewpageComponent {

  waterTaxsta!:waterTaxstatus;
  
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private watertaxService : WatertaxServiceService

  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam){
      const id = +idParam;
      this.waterTaxsta= this.watertaxService.taxUsersList.find(
        (obj)=> obj.id === id
      )!
    }
  }
  backtoList() {
    this.router.navigateByUrl("/watertax-type");
  }
}
