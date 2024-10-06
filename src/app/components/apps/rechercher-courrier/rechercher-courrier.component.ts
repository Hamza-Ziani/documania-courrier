import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';

@Component({
  selector: 'app-rechercher-courrier',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule],
  templateUrl: './rechercher-courrier.component.html',
  styleUrl: './rechercher-courrier.component.scss'
})
export class RechercherCourrierComponent {

}
