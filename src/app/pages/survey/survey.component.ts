import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-survey',
  imports: [NgFor,NgIf],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent {


  surveyData:any[]=[];
  isloading:boolean=false;
  
  successMsg="Api success";


  constructor(private http:HttpClient) { 
    this.successMsg;
  }
   


  ngOnInit(): void {
    // debugger
     this.getAllData()
     console.log(this.surveyData)
  }

 

  getAllData(){
    this.isloading=true;
    // debugger;
    this.http.get("https://api.freeprojectapi.com/api/Survey/getAllUsers").subscribe ({next:(res:any)=>{
        this.surveyData=res;
        },
      error:(err)=>{
        console.error('API Error',err)
      },
      complete:()=>{
        debugger
        this.isloading= false;
        console.log(this.successMsg)

      }
    })
  }
  

}
