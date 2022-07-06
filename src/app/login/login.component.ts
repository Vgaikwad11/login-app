import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ILogin, LoginRes, UserRes } from '../_model/login.model';
import { LoginService } from '../_service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    loginError: string = ''

    constructor(private router: Router, private loginService: LoginService) { }

    loginForm = new ILogin('vikasG@gmail.com', '987654321')

    submitLogin(Form: NgForm): void {
        this.loginService.loginEmp(Form.value)
            .subscribe(
                (res: LoginRes) => {
                    this.loginError = ''
                    this.loginService.getUserInfo(res['token'])
                        .subscribe((response: UserRes) => (this.validateUser(response['role'])))
                },
                (err: any[]) => {
                    console.log(err)
                    this.loginError = "Please Enter Correct Details"
                }
            )
    }

    validateUser(roleType: string): void {
        localStorage.setItem('Role_Type', roleType)
        this.router.navigate(['/dashboard'])
    }

}