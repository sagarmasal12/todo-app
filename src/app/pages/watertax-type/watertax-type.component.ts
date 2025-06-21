import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WatertaxServiceService } from '../service/watertax-service.service';

@Component({
  selector: 'app-watertax-type',
  imports: [NgFor,NgIf],
  templateUrl: './watertax-type.component.html',
  styleUrl: './watertax-type.component.css'
})
export class WatertaxTypeComponent {


  router = inject(Router);

  constructor(private watertaxSer: WatertaxServiceService){

  }

  adduser(){
    this.router.navigateByUrl("/watertax-form")
  }
  

  get waterTaxStatuses(){
    return this.watertaxSer
  }

}
