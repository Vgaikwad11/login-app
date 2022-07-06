import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRes } from './_model/login.model';
import { LoginService } from './_service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
  
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('Token_Number')
    this.loginService.getUserInfo(this.token ? this.token : '')
      .subscribe((res: UserRes) => this.userInfo = res)
  }
}
