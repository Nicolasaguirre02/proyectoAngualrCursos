import { Component, EventEmitter, Input, OnInit, Output, input, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../../../compartido/interfaces/alumno/alumno';


@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrl: './modificar-alumno.component.scss'
})
export class ModificarAlumnoComponent implements OnInit {

  listaCursos: any = [
    {value: 'Angular', nombre: 'Angular'},
    {value: 'WordPress', nombre: 'WordPress'},
    {value: 'SQL', nombre: 'SQL'},
    {value: 'Python', nombre: 'Python'},
    {value: 'CSS', nombre: 'CSS'},
    {value: 'Next.js', nombre: 'Next.js'},
  ];

  @Input() alumnoModificar:any = {};

  @Output() actualizarAlumno = new EventEmitter<any>()


  public formularioAlumno:FormGroup = this.form.group({
    idAlumno:[], 
    nombre:[''],
    apellido:[''],
    edad:[ ],
    curso:[''],
    nota:[ ],
  })

  constructor(private form:FormBuilder){
    
  }

  ngOnInit(): void {
    this.formularioAlumno = this.form.group({
      idAlumno:[this.alumnoModificar.idAlumno],
      nombre:[this.alumnoModificar.nombre, [Validators.required, Validators.minLength(5) ]],
      apellido:[this.alumnoModificar.apellido, [Validators.required, Validators.minLength(5) ]],
      edad:[this.alumnoModificar.edad, [Validators.required ]],
      curso:[this.alumnoModificar.curso, [Validators.required ]],
      nota:[this.alumnoModificar.nota, [Validators.required ]],
    })
  }

  
  guardarModificacion(){
    

    if(this.formularioAlumno.invalid){
      this.formularioAlumno.markAllAsTouched();
      return
    }else{
      this.actualizarAlumno.emit(this.formularioAlumno.value);
      this.formularioAlumno.reset()
    }
  }


}
