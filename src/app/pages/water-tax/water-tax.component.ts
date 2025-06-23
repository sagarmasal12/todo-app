import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-water-tax',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './water-tax.component.html',
  styleUrl: './water-tax.component.css'
})
export class WaterTaxComponent implements OnInit {

employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employees: this.fb.array([])
    });

    // Add default rows (10)
    for (let i = 0; i < 10; i++) {
      this.addEmployeeRow();
    }
  }

  get employees(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }

  addEmployeeRow(): void {
    this.employees.push(this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      designation: ['', Validators.required],
      doj: ['', Validators.required]
    }));
  }

  removeEmployeeRow(index: number): void {
    this.employees.removeAt(index);
  }
  

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
    } else {
      alert('Form Invalid');
    }
  }
}
