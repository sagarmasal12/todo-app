import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WatertaxServiceService } from '../service/watertax-service.service';
import { waterTaxstatus } from '../models/water-tax';

@Component({
  selector: 'app-editpage',
  imports: [ReactiveFormsModule],
  templateUrl: './editpage.component.html',
  styleUrl: './editpage.component.css'
})
export class EditpageComponent  {

  myform! : FormGroup;
  editId:number|null =null;

  waterTaxList:waterTaxstatus[]=[];


  constructor(
    private router:Router,
    private fb:FormBuilder,
    private watertaxService:WatertaxServiceService,
    private route:ActivatedRoute

  ){}

  
  ngOnInit() {
    this.waterTaxList= this.watertaxService.taxUsersList
    this.myform=this.fb.nonNullable.group({
      firstName:[''],
      lastName:[''],
      designation:['']
    })
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam){
      this.editId= +idParam
      const waterTaxstatus = this.waterTaxList.find(
        (obj)=>obj.id === this.editId
      )

      this.myform.patchValue({
        firstName:waterTaxstatus?.firstName,
        lastName:waterTaxstatus?.lastName,
        designation:waterTaxstatus?.designation
      })
    }
  }

    

  onSubmit(){
      if(this.myform.invalid){
        this.myform.markAllAsTouched()
      }
      if(this.editId !== null){
        if(this.myform.invalid){
          this.myform.markAllAsTouched();
          return
        }
        this.watertaxService.updateWaterTaxStatus(this.editId, this.myform.value);    
      } else{
        this.watertaxService.addwaterTaxStatus(this.myform.value)
      }
      this.myform.reset();
      this.backtoList()
  }

  backtoList(){
    this.router.navigateByUrl('watertax-type')
  }
  resetForm(){
    this.myform.reset();
  }

  get statusName(){
    return this.myform.get('statusName') as FormControl;
  }

}





