import { Component, inject, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { WatertaxServiceService } from '../service/watertax-service.service';
import { FormsModule } from '@angular/forms';
import { DeferBlockFixture } from '@angular/core/testing';

@Component({
  selector: 'app-watertax-type',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule,NgClass],
  templateUrl: './watertax-type.component.html',
  styleUrl: './watertax-type.component.css'
})
export class WatertaxTypeComponent implements OnInit {
  searchText: string = '';
  usersPerPage: number = 5;
  currentPage: number = 1;
  // pages = [1, 2, 3, 4, 5];  // or generate dynamically
  // currentPage = 1;

  filteredUsers: any[] = [];
  paginatedUsers: any[] = [];
  usersPerPageOptions: number[] = [5, 10,15, 50];

  router = inject(Router);

  constructor(private watertaxSer: WatertaxServiceService) {}

  ngOnInit(): void {
    this.filteredUsers = [...this.watertaxSer.taxUsersList];
    this.updatePaginatedUsers();
  }

  get waterTaxStatuses() {
    return this.watertaxSer;
  }

  get totalPages(): number {
    debugger
    return Math.ceil(this.filteredUsers.length / this.usersPerPage);
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
      this.filteredUsers = this.watertaxSer.taxUsersList;
      this.currentPage = 1;
      this.updatePaginatedUsers();
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
    this.currentPage = 1;
    this.updatePaginatedUsers();
  }

  updatePaginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.usersPerPage;
    const endIndex = startIndex + this.usersPerPage;
    this.paginatedUsers = this.filteredUsers.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedUsers();
  }

  // goToPage(page: number) {
  // this.currentPage = page;
  //   // Add your page logic here
  // }


  previousPage() {
    // debugger
    if (this.currentPage > 1) {
      debugger
      this.currentPage--;
      this.updatePaginatedUsers();
    }
  }


  nextPage() {
    // debugger
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      debugger
      this.updatePaginatedUsers();
    }
  }

  changeUsersPerPage(event:Event) {
    debugger
    const targetValue=event.target as HTMLSelectElement
    
    this.usersPerPage=+targetValue.value;
    console.log(this.usersPerPage);
    
    this.currentPage = 1;
      const newTotalPages = this.totalPages;
  if (this.currentPage > newTotalPages) {
    this.currentPage = newTotalPages;
  }
    this.updatePaginatedUsers();
  }
}
