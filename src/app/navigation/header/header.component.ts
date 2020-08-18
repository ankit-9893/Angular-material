import { NewUserComponent } from './../../user/new-user/new-user.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() newEmployee = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  addEmployee() {
    console.log('in mat lo');
    const dialogRef = this.dialog.open(NewUserComponent, {
      height: '60%',
      width: '50%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
