import { NewEmployeeComponent } from './../new-employee/new-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from './../emp.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

const ELEMENT_DATA: Employee[] = [
  {
    empId: 1,
    empName: 'ABC',
    empContact: '0000000001',
    empDepartment: 'Hr',
    empEmail: 'hr@company.com',
    empAddress: 'Indore',
  },
  {
    empId: 2,
    empName: 'CDE',
    empContact: '0000000002',
    empDepartment: 'Developer',
    empEmail: 'hr@company.com',
    empAddress: 'Indore',
  },
  {
    empId: 3,
    empName: 'MNO',
    empContact: '0000000003',
    empDepartment: 'Tester',
    empEmail: 'hr@company.com',
    empAddress: 'Indore',
  },
  {
    empId: 4,
    empName: 'PQR',
    empContact: '0000000004',
    empDepartment: 'Management',
    empEmail: 'hr@company.com',
    empAddress: 'Indore',
  },
  {
    empId: 5,
    empName: 'XYZ',
    empContact: '0000000005',
    empDepartment: 'Organizer',
    empEmail: 'hr@company.com',
    empAddress: 'Indore',
  },
];

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css'],
})
export class DisplayEmployeeComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'empId',
    'empName',
    'empContact',
    'empDepartment',
    'empEmail',
    'empAddress',
    'action',
  ];

  selection = new SelectionModel<Employee>(true, []);
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  checkboxLabel(row?: Employee): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.empId + 1
    }`;
  }

  addNewEmployee() {
    const dialogRef = this.dialog.open(NewEmployeeComponent, {
      height: '60%',
      width: '60%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
