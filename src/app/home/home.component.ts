import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { ApiService } from '../api.service';
import {User, UsersResponse, UserResponse} from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  apiService : ApiService;

  displayedColumns: string[] = ['Id', 'Name', 'Email', 'RoleType', '_Status'];
  dataSource  : MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  showUserDialog : any;
  user : User;
  roleTypes : any;
  roleType : any;

  constructor(apiService : ApiService) {
    this.apiService = apiService;
    this.showUserDialog = false;
    this.user = this.getNewUser();
    this.roleTypes = ["Customer Executivoe", "Admin"];
  }

  getNewUser() {
    return {Name:"", Email:"", Id: 0, RoleType: "", _Status:3};
  }


  ngOnInit() 
  {
    this.updateTableWithUsers();
  }

  updateTableWithUsers() {
    this.apiService.getUsers().subscribe((response:UsersResponse) => {
      this.dataSource = new MatTableDataSource(response.Data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }



  saveUser() {
    if (this.user.Email)
    if (this.user.Id == 0)
    {
      this.apiService.addUser(this.user).subscribe((response:UserResponse)=> {
        if (response.Success) {
          this.refreshView();
        }
      });
    }
    else{
      this.apiService.editUser(this.user).subscribe((response:UserResponse)=> {
        if (response.Success) {
          this.refreshView();
        }
      });
    }
  }


  deleteUser() {
    this.apiService.deleteUser({Id:this.user.Id}).subscribe((response) => {
        this.refreshView();
    });
  }

  refreshView() {
    this.updateTableWithUsers();
    this.hideForm()
    this.user = this.getNewUser();
  }

  showEditDialog(user) {
    this.user = user;
    this.showForm();
  }

  hideForm(){
    this.user = this.getNewUser();
    this.showUserDialog = false;
  }

  showForm(){
    this.showUserDialog = true;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  

}
