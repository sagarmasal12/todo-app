import { Injectable } from '@angular/core';
import { waterTaxstatus } from '../models/water-tax';

@Injectable({
  providedIn: 'root'
})
export class WatertaxServiceService {

  constructor() { }

    taxUsersList:waterTaxstatus[] = [
    {id:1, firstName:"Rajesh",middleName:'--',mobileNumber:'9226' ,lastName: 'kadam' ,designation: 'Angular developer'},
    {id:2, firstName:"Harsh",middleName:'--',mobileNumber:'5465' , lastName: 'sande', designation:'Java Deve'},
    {id:3, firstName:"Vishal",middleName:'--',mobileNumber:'6565' , lastName: 'patil', designation:'Php Deve'},
    {id:4, firstName:"Kunal",middleName:'oaasd',mobileNumber:'5447' , lastName: 'patil', designation:'Php Deve'},
    {id:5, firstName:"Sharad",middleName:'anasdf',mobileNumber:'2288' , lastName: 'Kharat', designation:'Python Deve'},
    {id:6, firstName:"Vijay", middleName:'--',mobileNumber:'5599', lastName: 'Mane', designation: 'Data Engineer'},
    {id:7, firstName:"Mayur", middleName:'--',mobileNumber:'7894',lastName: 'Masal', designation:'Cloud Engi'},
    {id:7, firstName:"Mayur",middleName:'--',mobileNumber:'6356' , lastName: 'Masal', designation:'Cloud Engi'},
    {id:8, firstName:"Sid",middleName:'--',mobileNumber:'5966' , lastName: 'Jadhav', designation:'Php Deve'},
    {id:9, firstName:"Rahul",middleName:'--',mobileNumber:'5999' , lastName: 'Thik', designation:'Js Deve'},
    {id:10, firstName:"Nitesh",middleName:'--',mobileNumber:'5588' , lastName: 'Kharwar', designation:'Java Deve'}

  ]

  addwaterTaxStatus(obj:waterTaxstatus){
    debugger
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
