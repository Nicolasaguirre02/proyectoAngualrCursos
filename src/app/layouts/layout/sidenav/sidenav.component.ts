import { Component } from '@angular/core';
import { AutenticacionService } from '../../../core/servicios/autenticacion.service';
import { Store } from '@ngrx/store';
import { selectorAutenticacionEstado } from '../../../core/store/autenticacion/selectors';
import { Alumno } from '../../../compartido/interfaces/alumno/alumno';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  showFiller = false;

  tipoPersona:string|undefined="";

  constructor(private autenticacion: AutenticacionService, private store:Store ){
    store.select(selectorAutenticacionEstado).subscribe((resp) => {
      this.tipoPersona = resp.usuario?.tipo;
    })
  }

  salir(){
    this.autenticacion.salir();
  }
}
