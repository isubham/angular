import { Injectable } from '@angular/core';
import {User} from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl : any = "http://localhost:59075/api"

  constructor(private http:HttpClient) {
    this.http = http;
  }
  
  getUsers() {
    return this.http.get<any>(this.baseUrl + "/user/GetUsers");
  }


  addUser(newUser) {
    return this.http.post<any>(this.baseUrl + "/user/add", newUser);
  }

  editUser(newUser) {
    return this.http.put<any>(this.baseUrl + "/user/UpdateUser", newUser);
  }

  deleteUser(user) {
    return this.http.delete<any>(this.baseUrl + "/user/removeuser?Id="+user.Id, {});
  }


}
