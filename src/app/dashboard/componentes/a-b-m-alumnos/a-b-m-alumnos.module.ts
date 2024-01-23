import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ModificarAlumnoComponent } from './modificar-alumno/modificar-alumno.component';
import { CompartidoModule } from '../../../compartido/compartido.module';
import { ListaAlumnoPipe } from '../../../compartido/pipe/lista-alumno.pipe';



@NgModule({
  declarations: [
    ListadoAlumnosComponent,
    AgregarAlumnoComponent,
    ModificarAlumnoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    CompartidoModule,
  ],
  exports: [
    ListadoAlumnosComponent,
    AgregarAlumnoComponent,
    ModificarAlumnoComponent
  ]
})
export class ABMAlumnosModule { }
