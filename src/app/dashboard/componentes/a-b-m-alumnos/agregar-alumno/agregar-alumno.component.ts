import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrl: './agregar-alumno.component.scss'
})



export class AgregarAlumnoComponent {

  @Output() alumnoCreado = new EventEmitter();

  listaCursos: any = [
    {value: 'Angular', nombre: 'Angular'},
    {value: 'WordPress', nombre: 'WordPress'},
    {value: 'SQL', nombre: 'SQL'},
    {value: 'Python', nombre: 'Python'},
    {value: 'CSS', nombre: 'CSS'},
    {value: 'Next.js', nombre: 'Next.js'},
  ];

  public formularioAlumno:FormGroup = this.form.group({
    nombre:['', [Validators.required, Validators.minLength(5) ]],
    apellido:['', [Validators.required, Validators.minLength(5) ]],
    edad:[  , [Validators.required ]],
    curso:['', [Validators.required ]],
    nota:[ ,[Validators.required ]]
  })

  constructor(private form:FormBuilder){}


  guardarAlumno(): void {
    if(this.formularioAlumno.invalid){
      this.formularioAlumno.markAllAsTouched();
      return
    }else{
      this.alumnoCreado.emit(this.formularioAlumno.value);
      this.formularioAlumno.reset()
    }
  }
}
