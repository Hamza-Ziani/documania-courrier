import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';

@Component({
  selector: 'app-recherches-frequentes',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule],
  templateUrl: './recherches-frequentes.component.html',
  styleUrl: './recherches-frequentes.component.scss'
})
export class RecherchesFrequentesComponent {

}
