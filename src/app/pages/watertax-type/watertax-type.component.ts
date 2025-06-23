import { Component, inject, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { WatertaxServiceService } from '../service/watertax-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-watertax-type',
  standalone: true,
  imports: [NgFor, NgIf,FormsModule],
  templateUrl: './watertax-type.component.html',
  styleUrl: './watertax-type.component.css'
})
export class WatertaxTypeComponent implements OnInit {
  searchText: string = '';
  filteredUsers: any[] = [];

  router = inject(Router);

  constructor(private watertaxSer: WatertaxServiceService) {}

  ngOnInit(): void {
   
     // Initially set full list
    this.filteredUsers = [...this.watertaxSer.taxUsersList];
  }

  adduser() {
    this.router.navigateByUrl('/add-waterTax-status');
  }

  onViewclick(id: number) {
    this.router.navigateByUrl(`/viewpage/${id}`);
  }

  editwatertaxStatus(id: number) {
    this.router.navigateByUrl(`/editpage/${id}`);
  }

  deletewaterTaxuser(id: number) {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      this.watertaxSer.deleteWaterTaxUsers(id);
      // Refresh search after deletion
      this.onSearch();
    }
  }

  onSearch() {
    const query = this.searchText.toLowerCase().trim();
    this.filteredUsers = this.waterTaxStatuses.taxUsersList.filter((user: any) =>
      user.firstName.toLowerCase().includes(query) ||
      user.lastName.toLowerCase().includes(query) ||
      user.middleName.toLowerCase().includes(query) ||
      user.mobileNumber.includes(query) ||
      user.designation.toLowerCase().includes(query)
    );
  }

  get waterTaxStatuses() {
    return this.watertaxSer;
  }
}
