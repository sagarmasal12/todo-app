import { Injectable } from '@angular/core';
import { waterTaxstatus } from '../models/water-tax';

@Injectable({
  providedIn: 'root'
})
export class WatertaxServiceService {

  constructor() { }

    taxUsersList:waterTaxstatus[] = [
    {id:1, firstName:"Rajesh", lastName: 'kadam', designation: 'Angular developer'},
    {id:2, firstName:"Harsh", lastName: 'sande', designation:'Java Deve'},
    {id:3, firstName:"Vishal", lastName: 'patil', designation:'Php Deve'},
    {id:4, firstName:"Tushar", lastName: 'Jadhav', designation:'Angular Deve'},
    {id:5, firstName:"Sharad", lastName: 'Kharat', designation:'Python Deve'}

  ]


}
