import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';


@Component({
  selector: 'app-frame2',
  templateUrl: './frame2.component.html',
  styleUrls: ['./frame2.component.css']
})
export class Frame2Component {

  constructor(private dialog: MatDialog) {
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.dialog.open(DialogComponent, dialogConfig);
    // const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(
    //     data => console.log('Dialog output:', data)
    // );
  }

}




