import { NoticesComponent } from './notices/notices/notices.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayEmployeeComponent } from './employee/display-employee/display-employee.component';


const routes: Routes = [
  { path: 'login', component:  LoginComponent},
  { path: 'allemp', component:  DisplayEmployeeComponent},
  { path: 'notices', component:  NoticesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
