import { Component, EventEmitter, Input, OnInit, Output, input, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../../../compartido/interfaces/alumno/alumno';
import { CargarCursosService } from '../../../../core/servicios/cargar-cursos.service';
import { cursosI } from '../../../../compartido/interfaces/cursos/curso';


@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrl: './modificar-alumno.component.scss'
})
export class ModificarAlumnoComponent implements OnInit {

  listaCursos: cursosI[] = [];

  @Input() alumnoModificar:any = {};

  @Output() actualizarAlumno = new EventEmitter<any>();

  @Output() ocultarFormularioModificar = new EventEmitter();


  public formularioAlumno:FormGroup = this.form.group({
    idAlumno:[], 
    id:[],
    password:[],
    nombre:[''],
    apellido:[''],
    edad:[ ],
    tipo:[''],
    nombreUsuario:['']
  })

  constructor(private form:FormBuilder, private servicioCursos:CargarCursosService){
  }

  ngOnInit(): void {
    this.formularioAlumno = this.form.group({
      idAlumno:[this.alumnoModificar.idAlumno],
      id:[this.alumnoModificar.id],
      password:[this.alumnoModificar.password],
      nombre:[this.alumnoModificar.nombre, [Validators.required, Validators.minLength(5) ]],
      apellido:[this.alumnoModificar.apellido, [Validators.required, Validators.minLength(5) ]],
      edad:[this.alumnoModificar.edad, [Validators.required ]],
      tipo:[this.alumnoModificar.tipo],
      nombreUsuario:[this.alumnoModificar.nombreUsuario]
    })

    this.guardarListaCursos();
    
  }

  guardarListaCursos(){
    this.servicioCursos.mostrarCursos().subscribe({
      next:(cursos) =>{
        console.log(cursos)
        this.listaCursos = cursos
      }
    })
  }

  
  guardarModificacion(){
    if(this.formularioAlumno.invalid){
      this.formularioAlumno.markAllAsTouched();
      return
    }else{
      this.actualizarAlumno.emit(this.formularioAlumno.value);
      this.ocultarFormulario();
      this.formularioAlumno.reset()
    }
  }

  ocultarFormulario(){
    this.ocultarFormularioModificar.emit();
  }


}
