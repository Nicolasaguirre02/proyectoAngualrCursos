import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargarCursosService } from '../../../../core/servicios/cargar-cursos.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrl: './agregar-alumno.component.scss'
})



export class AgregarAlumnoComponent implements OnInit{

  @Output() alumnoCreado = new EventEmitter();

  listaCursos: any = [

  ];

  public formularioAlumno:FormGroup = this.form.group({
    nombre:['', [Validators.required, Validators.minLength(5) ]],
    apellido:['', [Validators.required, Validators.minLength(5) ]],
    edad:[  , [Validators.required ]],
    curso:['', [Validators.required ]],
    nota:[ ,[Validators.required ]]
  })

  constructor(private form:FormBuilder, private cursosServicio:CargarCursosService){}

  ngOnInit(): void {
    this.guardarListaCursos();
  }

  guardarListaCursos(){
    this.cursosServicio.mostrarCursos()
      .subscribe((cursos) => this.listaCursos = cursos);
  }


  guardarAlumno(): void {
    if(this.formularioAlumno.invalid){
      /* this.formularioAlumno.markAllAsTouched(); */
      return
    }else{
      this.alumnoCreado.emit(this.formularioAlumno.value);
      this.formularioAlumno.reset();
    }
  }
}
