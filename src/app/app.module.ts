import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { DisplayEmployeeComponent } from './employee/display-employee/display-employee.component';
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';
import { NoticesComponent } from './notices/notices/notices.component';
import { NewUserComponent } from './user/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    DisplayEmployeeComponent,
    NewEmployeeComponent,
    NoticesComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewEmployeeComponent, NewUserComponent],
})
export class AppModule {}
