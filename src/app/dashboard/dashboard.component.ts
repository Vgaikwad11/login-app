import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRes } from 'src/app/_model/login.model';
import { LoginService } from 'src/app/_service/login.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor(private loginService: LoginService,
        private router: Router) { }

    token: string | null = ''
    userInfo: UserRes = {
        "_id": "",
        "name": "",
        "email": "",
        "password": "",
        "phone": "",
        "role": "",
        "__v": 0
    }

    ngOnInit(): void {
        this.token = localStorage.getItem('Token_Number')
        this.loginService.getUserInfo(this.token ? this.token : '')
            .subscribe((res: UserRes) => this.userInfo = res)
    }

    logoutUser(): void {
        localStorage.removeItem('Token_Number');
        localStorage.removeItem('Role_Type');
        this.router.navigate(['/login'])
    }

}