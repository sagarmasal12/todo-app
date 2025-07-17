import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Client } from '../model/model';
import { VehicleSrvService } from '../vehicle-par-service/vehicle-srv.service';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  clientForm!: FormGroup;
  message: string = '';
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private clientService:VehicleSrvService) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      clientName: ['', Validators.required],
      businessName: ['', Validators.required],
      contactPerson: ['', Validators.required],
      contactNo: ['', Validators.required],
      altContactNo: [''],
      email: ['', [Validators.required, Validators.email]],
      logo: [''],
      createdDate: [new Date().toISOString()],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.clientForm.invalid) {
      return;
    }

    const formData: Client = {
      clientId: 0,
      ...this.clientForm.value,
    };

    this.clientService.addClient(formData).subscribe({
      next: (res:any) => {
        this.message = res.message;
        // console.log(this.message)
        console.log(formData)

        if (res.result) {
          this.clientForm.reset();
          this.submitted = true;
          this.clientForm.patchValue({ createdDate: new Date().toISOString() }); // reset date
          (document.getElementById('closeModalBtn') as HTMLElement)?.click(); // close modal
        }
      },
      error: (err: any) => {
        console.error('API Error:', err);
        this.message = 'Something went wrong. Please try again.';
      },
    });
  }
}
