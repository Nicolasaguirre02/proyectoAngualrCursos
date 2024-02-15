import { Component } from '@angular/core';
import { AutenticacionService } from '../../../core/servicios/autenticacion.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  showFiller = false;

  constructor(private autenticacion: AutenticacionService ){}

  salir(){
    this.autenticacion.salir();
  }
}
