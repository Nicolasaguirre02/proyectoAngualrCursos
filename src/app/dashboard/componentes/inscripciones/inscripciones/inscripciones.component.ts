import { Component } from '@angular/core';
import { InscripcionesService } from '../store/inscripciones.service';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from '../store/inscripciones.actions';
import { selectInscripciones } from '../store/inscripciones.selectors';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionesDialogComponent } from './componentes/inscripciones-dialog/inscripciones-dialog.component';
import { InscripcionesI } from '../models/inscripciones.interface';
import { ServicioAlertaService } from '../../../../core/servicios/servicio-alerta.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent {
  displayedColumns: string[] = ['position', 'acciones'];
  dataSource:InscripcionesI[] = [];

  panelOpenState = false;

  inscripciones$:any;

  listaInscripciones:InscripcionesI[] = []

  constructor(private mensajeAlerta:ServicioAlertaService,private inscripcionesServicio: InscripcionesService, private store:Store, private matDialog:MatDialog ){
    this.obtenerListadoInscripcion();

  }

  obtenerListadoInscripcion(){
    this.store.select(selectInscripciones).subscribe((data) => {
      this.dataSource = data;
    });
    this.store.dispatch(InscripcionesActions.cargarInscripcioness())
  }

  crearInscripcion(){
    this.matDialog.open(InscripcionesDialogComponent);
  }

  eliminarInscripcion(idEliminar:string|number){
    console.log("a eliminar", idEliminar);
    

    this.mensajeAlerta.mostrarAlertaEliminar("Deseas eliminar esta inscripcion?") // Mostrar alerta de confirmación
    .then(
        (valor) => {
            if(valor){ // Si el usuario confirma la eliminación
                if(idEliminar){ // Verificar si hay un ID para eliminar
                    this.store.dispatch(InscripcionesActions.eliminarInscripcion({data:idEliminar})); // Despachar la acción para eliminar la inscripción
                    this.obtenerListadoInscripcion(); // Obtener el listado de inscripciones después de eliminar
                }
            }
        }
    )

    
  }

}
