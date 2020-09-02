import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsertableComponent } from './usertable/usertable.component';
import { HierarchicalstructueComponent } from './hierarchicalstructue/hierarchicalstructue.component';
import { PiechartComponent } from './piechart/piechart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterialApp';
  constructor(public dialog: MatDialog, public dialogs: MatDialog, public dialogg: MatDialog) {
  }
  openChartDialog(): void {
    const dialogRefss = this.dialogg.open(PiechartComponent, {
    });
    dialogRefss.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
    setTimeout(() => {
      dialogRefss.close();
      this.openUserDialog();
    }, 10000);
  }
  openUserDialog(): void {
    const dialogRef = this.dialog.open(UsertableComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
    setTimeout(() => {
      dialogRef.close();
      this.openStructureDialogs();
    }, 10000);
  }
  openStructureDialogs(): void {
    const dialogRefs = this.dialogs.open(HierarchicalstructueComponent, {
    });
    dialogRefs.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
    setTimeout(() => {
      dialogRefs.close();
      this.openChartDialog();
    }, 10000);
  }
}
