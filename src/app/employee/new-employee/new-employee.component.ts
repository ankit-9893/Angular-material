import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
})
export class NewEmployeeComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: any
  ) {}


  ngOnInit(): void {}
}
