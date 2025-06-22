import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watertax-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './watertax-form.component.html',
  styleUrl: './watertax-form.component.css'
})
export class WatertaxFormComponent implements OnInit {

  myForm!: FormGroup;
  isEditMode: boolean = false; // Default add mode

  constructor(
    private fb: FormBuilder,
    private router: Router,
   
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      mfirstname: [''],
      mmiddleName: [''],
      mlastName: [''],
      mobileNo: [''],
      address: [''],
      propertyNumber: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

 

}
