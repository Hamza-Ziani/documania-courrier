import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';
import { MatDrawer } from '@angular/material/sidenav';
import { UpdateCourrierRecentComponent } from 'app/components/dialogs/update-courrier-recent/update-courrier-recent.component';
import { ConfirmationDialogComponent } from 'app/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
interface File {
    id: number;
    name: string;
    date: string;
    temps: string;
}
@Component({
    selector: 'app-courriers-favoris',
    standalone: true,
    imports: [CommonModule, MaterialModuleModule],
    templateUrl: './courriers-favoris.component.html',
    styleUrl: './courriers-favoris.component.scss',
})
export class CourriersFavorisComponent {
    @ViewChild('matDrawer') matDrawer!: MatDrawer;
    isDrawerOpened: boolean = false;
    drawerMode: 'side' | 'over';

    constructor(private dialog: MatDialog) {}
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
        { id: 1, name: 'File 1', date: '12/12/2012', temps: '1 jours' },
        { id: 2, name: 'File 2', date: '13/12/2012', temps: '1 jours' },
        { id: 3, name: 'File 3', date: '14/12/2012', temps: '1 jours' },
        { id: 4, name: 'File 4', date: '15/12/2012', temps: '1 jours' },
        { id: 5, name: 'File 5', date: '16/12/2012', temps: '1 jours' },
        { id: 6, name: 'File 6', date: '17/12/2012', temps: '1 jours' },
        { id: 7, name: 'File 7', date: '17/12/2012', temps: '1 jours' },
    ];
    // Method to open the drawer
    openDetailsDrawer(id: number) {
        this.matDrawer.open(

        ); // Open the drawer
    }
    // Method to close the drawer
    closeDrawer() {
        this.matDrawer.close();
    }

    onBackdropClicked(): void {
        this.isDrawerOpened = false; // Close the drawer when backdrop is clicked
    }

    openDialog() {
        const dialogRef = this.dialog.open(UpdateCourrierRecentComponent, {});
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    openConfirmationDialog() {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                // Execute delete logic here
                console.log('Item deleted');
            } else {
                console.log('Deletion canceled');
            }
        });
    }
}
