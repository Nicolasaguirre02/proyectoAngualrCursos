import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from '../../../store/inscripciones.actions';
import { Alumno } from '../../../../../../compartido/interfaces/alumno/alumno';
import { selectAlumnos, selectCursos } from '../../../store/inscripciones.selectors';
import { cursosI } from '../../../../../../compartido/interfaces/cursos/curso';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicioAlertaService } from '../../../../../../core/servicios/servicio-alerta.service';

@Component({
  selector: 'app-inscripciones-dialog',
  templateUrl: './inscripciones-dialog.component.html',
  styleUrl: './inscripciones-dialog.component.scss'
})
export class InscripcionesDialogComponent {
  listaAlumnoss:Alumno[] = [];
  listaCursos: cursosI[] = [];

  formInscripciones:FormGroup;

  constructor(private mensajeAlerta:ServicioAlertaService,private store:Store, private form:FormBuilder, private dialoRef:MatDialogRef<InscripcionesDialogComponent>){

    this.formInscripciones = form.group({
      studentId:['',Validators.required],
      courseId: ['', Validators.required]
    })

    store.dispatch(InscripcionesActions.cargarAlumnos());
    store.dispatch(InscripcionesActions.cargarCursos());


    store.select(selectAlumnos).subscribe((data) => this.listaAlumnoss = data );
    store.select(selectCursos).subscribe((data) => this.listaCursos = data)
  }


  guardarInscripcion(){
    if(this.formInscripciones.invalid){
      this.formInscripciones.markAllAsTouched();
      this.mensajeAlerta.error("Datos vacios")
    }else{
      this.store.dispatch(InscripcionesActions.nuevaInscripcion({data : this.formInscripciones.value}))
      this.dialoRef.close()
    }
  }
}
