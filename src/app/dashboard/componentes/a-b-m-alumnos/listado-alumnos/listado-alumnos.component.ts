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
    this.alumnosServicio.listarAlumnos().subscribe({
      next: (alumnos) => {
        this.listado_alumnos = alumnos ;
        this.dataSource = this.listado_alumnos
        this.mostrarSpinner =  false;
      },
      error: (error) => {
        this.alertaMensaje.error("Error al cargar la lista de alumnos")
        this.mostrarSpinner = false;
      }
    })

    /* this.alumnosServicio.listarAlumnos().subscribe(
      (alumnos) => {
        this.listado_alumnos = alumnos ;
        this.dataSource = this.listado_alumnos
        this.mostrarSpinner =  false;
      },
      (error) => {
        console.error("Error al cargar la lista alumnos", error);
        this.mostrarSpinner = false;
      }
    ) */
  }


  alumnoEmitido(alumno: Alumno): void {
    this.alumnosServicio.guardarNuevoAlumno(alumno).subscribe((rspa) => this.consumirListaAlumnos());
    this.alertaMensaje.succes("Agregado correctamente")
  }


  mostrarForm(): void{
    this.mostrarFormularioModificar = true;
  }



  objetoModificar(modificar:Alumno){
    this.objetoAlumnoModificar = modificar
  }

  modificarDatosAlumno(eve: Alumno) {
    console.log("a modifciar del padreeee", eve  )
    this.alumnosServicio.alumnoPorID(eve).subscribe((rspa) => this.consumirListaAlumnos())
    /* this.consumirListaAlumnos(); */
    this.alertaMensaje.succes("Modificado correctamente")
  }


  eliminarAlumno(alumno: any){
/*     const id = this.dataSource.findIndex(alum => alum.idAlumno === alumno.idAlumno);*/
    const id = alumno.id;
    console.log("objeto a eliminar", id)

    this.alertaMensaje.mostrarAlertaEliminar("Desea eliminar el alumno?")
    .then((confirmado) => {
      if (confirmado) {
        if (id !== -1) {
          this.alumnosServicio.eliminarAlumno(id).subscribe((rspa) => this.consumirListaAlumnos());
        }
      }
    });
  }



  mostrarFormularioAlumnoNuevo(){
    this.mostrarFormularioModificar = false;
  }
  
}
