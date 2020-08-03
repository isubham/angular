import { UrlSerializer } from "@angular/router";

export interface User {
    Id : any;
    Name: any;
    Email : any;
    RoleType : any;
    _Status: any;
}

export interface UserResponse {
    Data : User;
    Message : any;
    Success : any;
}
export interface UsersResponse {
    Data : User[];
    Message : any;
    Success : any;
}
