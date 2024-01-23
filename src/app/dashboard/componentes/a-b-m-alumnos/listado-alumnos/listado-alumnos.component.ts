import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Alumno } from '../../../../compartido/interfaces/alumno/alumno';

 

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrl: './listado-alumnos.component.scss'
})
export class ListadoAlumnosComponent {
  listado_alumnos: Alumno[] = [
    {idAlumno: 1, nombre: 'Nicolas', apellido:'Aguirre', edad: 21, curso: 'Angular', nota:8},
    {idAlumno: 2, nombre: 'Hernan',apellido:'Fernandez', edad: 29, curso: 'CSS', nota:9},

  ];

  mostrarFormularioModificar = false;

  objetoAlumnoModificar={};


  displayedColumns: string[] = ['idAlumno', 'nombreApellido', 'edad','curso', 'nota', 'modificar', 'eliminar'];
  dataSource = this.listado_alumnos


  alumnoEmitido(alumno: Alumno): void {
    this.dataSource = [...this.dataSource, {...alumno, idAlumno: new Date().getTime()}];
    console.log(this.dataSource) //Crea una nueva lista y al mismo tiempo le agrega el nuevo alumno
  }


  mostrarForm(): void{
    this.mostrarFormularioModificar = true;
  }
  mostrarFormAlumno(): void{
    this.mostrarFormularioModificar = false;
  }


  objetoModificar(modificar:Alumno){
    this.objetoAlumnoModificar = modificar
    console.log(this.objetoAlumnoModificar)
  }

  modificarDatosAlumno(eve: Alumno) {
    const index = this.dataSource.findIndex((alumno) => alumno.idAlumno === eve.idAlumno);
  
    if (index !== -1) {
      this.dataSource[index] = { ...this.listado_alumnos[eve.idAlumno], ...eve };
      this.dataSource = [...this.dataSource];

    }
  }


  eliminarAlumno(alumno: Alumno){
    const id = this.dataSource.findIndex(alum => alum.idAlumno === alumno.idAlumno);

    if (id !== -1) {
      this.dataSource.splice(id, 1);
      this.dataSource = [...this.dataSource];
    }
  }
  
}
