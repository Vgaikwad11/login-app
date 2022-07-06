import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister } from '../_model/regsiter.model';
import { RegisterService } from '../_service/register.service';

@Component({
    selector: 'app-registerform',
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    constructor(private router: Router, private registerService: RegisterService) { }

    myEmployee = new IRegister('Vikas', 'vikas@gmail.com', '12345678', 8408848748);

    registartionStautus: any;

    submitForm(Form: NgForm): void {
        this.registerService.registerEmp(Form.value).subscribe(
            (res: any[]) => {
                this.registartionStautus = true;
                console.log('User Regsitered', res)
            }), (err: any[]) => {
                console.log('User Regsitration failed', err)
                this.registartionStautus = false;
            }
        this.router.navigate(['/login'])
    }

}