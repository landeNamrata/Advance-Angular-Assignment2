import { Component, OnInit } from '@angular/core';
// import { CommonService } from '../common.service';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonService } from '../common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  age: number;
  hobbies: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Shilpa', weight: 40, Organization: 'Nitor'},
//   {position: 2, name: 'Anu', weight: 45, Organization: 'Nitor'},
//   {position: 3, name: 'Suraj', weight: 50, Organization: 'Nitor'},
//   {position: 4, name: 'Shivaji', weight: 55, Organization: 'Nitor'},
//   {position: 5, name: 'Pritam', weight: 56, Organization: 'Nitor'},
//   {position: 6, name: 'Jenny', weight: 45, Organization: 'Nitor'},
//   {position: 7, name: 'Nilesh', weight: 78, Organization: 'Nitor'},
//   {position: 8, name: 'Namrata', weight: 70, Organization: 'Nitor'},
//   {position: 9, name: 'Fluorine', weight: 67, Organization: 'Nitor'},
//   {position: 10, name: 'Priti', weight: 50, Organization: 'Nitor'},
// ];



@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  dataSource;

  // ELEMENT_DATA=[]

  constructor(public serv:CommonService) { 
    debugger;
    this.serv.getUserData().subscribe(
      data => {
       this.dataSource = data ;
        console.log(this.dataSource);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  displayedColumns: string[] = ['position', 'name', 'age', 'hobbies'];
  ngOnInit(): void{
    //this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }
}
