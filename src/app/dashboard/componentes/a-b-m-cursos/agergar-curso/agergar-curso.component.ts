import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { cursosI } from '../../../../compartido/interfaces/cursos/curso';

@Component({
  selector: 'app-agergar-curso',
  templateUrl: './agergar-curso.component.html',
  styleUrl: './agergar-curso.component.scss'
})
export class AgergarCursoComponent {
  formularioCurso:FormGroup;

  constructor(private form:FormBuilder, 
              private dialogRef:MatDialogRef<AgergarCursoComponent>,
              @Inject(MAT_DIALOG_DATA) private cursoEditado?: cursosI ){

    this.formularioCurso = form.group({
      nombreCurso:['', [Validators.required, Validators.minLength(2)]],
      inicio: ['', [Validators.required]],
      finaliza: ['', [Validators.required]]
    })


    if(cursoEditado){
      this.formularioCurso.patchValue(cursoEditado);
    }

  }


  guardarCurso():void{
    if(this.formularioCurso.valid){
      this.dialogRef.close(this.formularioCurso.value);
    }
    
  }


  cerrarDialog():void{
    this.dialogRef.close();
  }

}
