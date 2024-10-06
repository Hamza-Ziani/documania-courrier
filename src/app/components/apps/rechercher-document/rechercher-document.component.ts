import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';

@Component({
  selector: 'app-rechercher-document',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule],
  templateUrl: './rechercher-document.component.html',
  styleUrl: './rechercher-document.component.scss'
})
export class RechercherDocumentComponent {

}
