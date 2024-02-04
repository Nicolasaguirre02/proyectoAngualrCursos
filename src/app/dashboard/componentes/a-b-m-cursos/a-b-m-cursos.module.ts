import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AgergarCursoComponent } from './agergar-curso/agergar-curso.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CompartidoModule } from '../../../compartido/compartido.module';





@NgModule({
  declarations: [
    ListadoCursosComponent,
    AgergarCursoComponent
  ],
  imports: [
    MatTableModule,
    CommonModule,

    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    CompartidoModule
  ],
  providers:[
    provideNativeDateAdapter()
  ],
  exports:[
    ListadoCursosComponent
  ]
})
export class ABMCursosModule { }
