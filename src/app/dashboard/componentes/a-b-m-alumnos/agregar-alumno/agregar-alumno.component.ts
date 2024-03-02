import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargarCursosService } from '../../../../core/servicios/cargar-cursos.service';
import { ServicioAlertaService } from '../../../../core/servicios/servicio-alerta.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrl: './agregar-alumno.component.scss'
})



export class AgregarAlumnoComponent implements OnInit{

  mostrarSelectCurso:boolean = true;//Si el usuario es un alumno, se le tiene que asignar un curso

  @Output() alumnoCreado = new EventEmitter();

  listaCursos: any = [

  ];

  public formularioAlumno:FormGroup = this.form.group({
    nombre:['', [Validators.required, Validators.minLength(5) ]],
    apellido:['', [Validators.required, Validators.minLength(5) ]],
    edad:[  , [Validators.required,  Validators.pattern, Validators.pattern(/^[0-9]*[1-9][0-9]*$/)]],
    nombreUsuario:['',[Validators.required]],
    password:['', [Validators.required ]],
    tipo:['',[Validators.required]]
  })

  constructor(private form:FormBuilder, private cursosServicio:CargarCursosService, private mensajeAlerta:ServicioAlertaService){}

  ngOnInit(): void {
    this.guardarListaCursos();
  }

  seleccionarCurso():void {
    if(this.formularioAlumno.value.tipo === "ADMIN"){
      this.mostrarSelectCurso = false;
      this.formularioAlumno.value.curso = '';
    }else{
      this.mostrarSelectCurso = true
    }
  }

  guardarListaCursos(){
    this.cursosServicio.mostrarCursos()
      .subscribe((cursos) => this.listaCursos = cursos);
  }


  guardarAlumno(): void {
    if(this.formularioAlumno.invalid){
      this.formularioAlumno.markAllAsTouched(); 
      this.mensajeAlerta.error("Completar datos")
      return
    }else{
      this.alumnoCreado.emit(this.formularioAlumno.value);
      this.formularioAlumno.reset();
    }
  }
}
