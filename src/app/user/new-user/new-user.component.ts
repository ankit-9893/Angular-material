import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: any
  ) {}

  roles: string[] = ['admin', 'manager', 'employee'];

  ngOnInit(): void {}
}
