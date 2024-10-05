import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';  // Import CommonModule
import {
    ChangeDetectorRef,
    Component,
    inject,
    OnInit,
    ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateCourrierRecentComponent } from 'app/components/dialogs/update-courrier-recent/update-courrier-recent.component';
import { MatDrawer } from '@angular/material/sidenav';
import { ConfirmationDialogComponent } from 'app/components/dialogs/confirmation-dialog/confirmation-dialog.component';
interface File {
    name: string;
    date: string;
    temps: string;
  }
@Component({
    selector: 'app-courriers-recents',
    templateUrl: './courriers-recents.component.html',
    styleUrls: ['./courriers-recents.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MaterialModuleModule,
        RouterOutlet,
        RouterLink,
        NgFor,
    ],
})
export class CourriersRecentsComponent implements OnInit {
    drawerMode: 'side' | 'over';
    selectedItem: any = null; // Initially no item is selected
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    @ViewChild('matDrawer') matDrawer!: MatDrawer;
    isDrawerOpened: boolean = false;

     // Method to open the drawer
  openDetailsDrawer(id: number) {
    this.matDrawer.open(); // Open the drawer
}
 // Method to close the drawer
 closeDrawer() {
    this.matDrawer.close();
}

    onBackdropClicked(): void {
      this.isDrawerOpened = false;  // Close the drawer when backdrop is clicked
    }


    // Fake data for folders and files
    items = {
        path: [], // Breadcrumb path data
        folders: [
            { id: 1, name: 'Documents', contents: '5 files' },
            { id: 2, name: 'Images', contents: '10 files' },
            { id: 3, name: 'Projects', contents: '3 files' },
        ],
        files: [
            { id: 1, name: 'Report.pdf', type: 'PDF', contents: '2 MB' },
            { id: 2, name: 'Presentation.docx', type: 'DOC', contents: '5 MB' },
            { id: 3, name: 'Budget.xlsx', type: 'XLS', contents: '1 MB' },
            { id: 4, name: 'Notes.txt', type: 'TXT', contents: '500 KB' },
            { id: 5, name: 'Photo.jpg', type: 'JPG', contents: '3 MB' },
        ],
    };
    files1: File[] = [
        { name: 'File 1', date: '12/12/2012', temps: '1 jours' },
        { name: 'File 2', date: '13/12/2012', temps: '1 jours' },
        { name: 'File 3', date: '14/12/2012', temps: '1 jours' },
        { name: 'File 4', date: '15/12/2012', temps: '1 jours' },
        { name: 'File 5', date: '16/12/2012', temps: '1 jours' },
        { name: 'File 6', date: '17/12/2012', temps: '1 jours' },
        { name: 'File 7', date: '17/12/2012', temps: '1 jours' },
      ];
      files2: File[] = [
        // { name: 'File 1', date: '12/12/2012', temps: '2 jours' },
        // { name: 'File 2', date: '13/12/2012', temps: '2 jours' },
        // { name: 'File 3', date: '14/12/2012', temps: '2 jours' },
        // { name: 'File 4', date: '15/12/2012', temps: '2 jours' },
        // { name: 'File 5', date: '16/12/2012', temps: '2 jours' },
        // { name: 'File 6', date: '17/12/2012', temps: '2 jours' },
        // { name: 'File 7', date: '17/12/2012', temps: '2 jours' },
      ];
      files3: File[] = [
        { name: 'File 1', date: '12/12/2012', temps: '3 jours' },
        { name: 'File 3', date: '13/12/2012', temps: '3 jours' },
        { name: 'File 3', date: '14/12/2012', temps: '3 jours' },
        { name: 'File 4', date: '15/12/2012', temps: '3 jours' },
        { name: 'File 5', date: '16/12/2012', temps: '3 jours' },
        { name: 'File 6', date: '17/12/2012', temps: '3 jours' },
        { name: 'File 7', date: '17/12/2012', temps: '3 jours' },
      ];
      constructor(
        private _activatedRoute : ActivatedRoute,
        private _router : Router,
        private _changeDetectorRef : ChangeDetectorRef,
        private dialog: MatDialog

    ) {}

    ngOnInit(): void {



    }



    openDialog() {
        const dialogRef = this.dialog.open(UpdateCourrierRecentComponent, {
            // width: '600px',
            // height: '900px'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    openConfirmationDialog() {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Execute delete logic here
          console.log('Item deleted');
        } else {
          console.log('Deletion canceled');
        }
      });
    }


    deleteFile(file: File): void {
        // Implement your delete logic here
    }


}
