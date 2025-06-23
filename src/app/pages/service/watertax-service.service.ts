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

  addwaterTaxStatus(obj:waterTaxstatus){
    obj['id'] = this.taxUsersList.length+1;
    this.taxUsersList.push(obj);
  }

  updateWaterTaxStatus(id:number, obj:waterTaxstatus){
    this.taxUsersList = this.taxUsersList.map((waterStatusObj)=>{
      if(waterStatusObj.id === id){
        obj['id']=id;
        return obj
      }
      return waterStatusObj
    })
  }

  deleteWaterTaxUsers(id:number){
    this.taxUsersList = this.taxUsersList.filter((obj)=> obj.id !== id)
    console.log(this.taxUsersList)
  }
  
}
