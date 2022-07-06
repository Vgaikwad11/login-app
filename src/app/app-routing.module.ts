import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { DashboardGaurdService } from './_gaurds/dashboard-gaurd.service';
import { UserGaurdServics } from './_gaurds/user-gaurd.service';


const routes: Routes = [
  { path: 'user', canActivate: [UserGaurdServics], component: UsersComponent },
  { path: 'dashboard', canActivate: [DashboardGaurdService], component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [DashboardGaurdService, UserGaurdServics],
  exports: [RouterModule]
})
export class AppRoutingModule { }
