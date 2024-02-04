import { Component, Output } from '@angular/core';
import { Alumno } from '../../../../compartido/interfaces/alumno/alumno'; 
import { CargarAlumnosService } from '../../../../core/servicios/cargar-alumnos.service';
import { ServicioAlertaService } from '../../../../core/servicios/servicio-alerta.service';


 

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrl: './listado-alumnos.component.scss'
})
export class ListadoAlumnosComponent {

  
  listado_alumnos: Alumno[] = [];

  mostrarFormularioModificar = false;

  objetoAlumnoModificar={};

  displayedColumns: string[] = ['idAlumno', 'nombreApellido', 'edad','curso', 'nota', 'acciones'];
  dataSource = this.listado_alumnos;

  mostrarSpinner=true;

  constructor( private alumnosServicio:CargarAlumnosService, private alertaMensaje:ServicioAlertaService){
    this.consumirListaAlumnos();

  }

  

  //Esta funcion guarda los alumnos llamando al servicio
  consumirListaAlumnos(){
    this.mostrarSpinner = true;
    this.alumnosServicio.listarAlumnos().subscribe(
      (alumnos) => {
        this.listado_alumnos = alumnos ;
        this.dataSource = this.listado_alumnos
        this.mostrarSpinner =  false;
      },
      (error) => {
        console.error("Error al cargar la lista alumnos", error);
        this.mostrarSpinner = false;
      }
    )
  }


  alumnoEmitido(alumno: Alumno): void {
    this.alumnosServicio.guardarNuevoAlumno(alumno);
    this.consumirListaAlumnos();
    this.alertaMensaje.succes("Agregado correctamente")
  }


  mostrarForm(): void{
    this.mostrarFormularioModificar = true;
  }



  objetoModificar(modificar:Alumno){
    console.log("a modifciar del padre", modificar)
    this.objetoAlumnoModificar = modificar
  }

  modificarDatosAlumno(eve: Alumno) {
    this.alumnosServicio.modificarAlumno(eve)
    this.consumirListaAlumnos();
    this.alertaMensaje.succes("Modificado correctamente")
  }


  eliminarAlumno(alumno: Alumno){
    const id = this.dataSource.findIndex(alum => alum.idAlumno === alumno.idAlumno);

    this.alertaMensaje.mostrarAlertaEliminar("Desea eliminar el alumno?")
    .then((confirmado) => {
      if (confirmado) {
        if (id !== -1) {
          this.dataSource.splice(id, 1);
          this.dataSource = [...this.dataSource];
        }
      }
    });
  }



  mostrarFormularioAlumnoNuevo(){
    this.mostrarFormularioModificar = false;
  }
  
}
