import { NewUserComponent } from './../../user/new-user/new-user.component';
import { NewEmployeeComponent } from './../../employee/new-employee/new-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onClose() {
    this.closeSidenav.emit();
  }

  addUser() {
    this.onClose();
    console.log('in mat lo');
    const dialogRef = this.dialog.open(NewUserComponent, {
      height: '60%',
      width: '50%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  addEmployee() {
    this.onClose();
    const dialogRef = this.dialog.open(NewEmployeeComponent, {
      height: '60%',
      width: '60%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
