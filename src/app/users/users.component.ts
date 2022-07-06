import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_service/user.service';

@Component({ 
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

    userList: any[] = []

    constructor(
        private users: UserService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.users.empList()
            .subscribe((res: any[]) => this.userList = res)
    }

    logoutUser(): void {
        localStorage.removeItem('Token_Number');
        localStorage.removeItem('Role_Type');
        this.router.navigate(['/login'])
    }

}