import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABMAlumnosModule } from './componentes/a-b-m-alumnos/a-b-m-alumnos.module';
import { ListadoAlumnosComponent } from './componentes/a-b-m-alumnos/listado-alumnos/listado-alumnos.component';
import { ModificarAlumnoComponent } from './componentes/a-b-m-alumnos/modificar-alumno/modificar-alumno.component';
import { AgregarAlumnoComponent } from './componentes/a-b-m-alumnos/agregar-alumno/agregar-alumno.component';
import { ABMCursosModule } from './componentes/a-b-m-cursos/a-b-m-cursos.module';
import { AutenticacionModule } from './componentes/autenticacion/autenticacion.module';
import { ListadoCursosComponent } from './componentes/a-b-m-cursos/listado-cursos/listado-cursos.component';
import { LoginComponent } from './componentes/autenticacion/login/login.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ABMAlumnosModule,
    ABMCursosModule,
    AutenticacionModule
  ],
  exports:[
    ListadoAlumnosComponent,
    AgregarAlumnoComponent,
    ModificarAlumnoComponent,

    ListadoCursosComponent,

    LoginComponent
  ]
})
export class DashboardModule {  }
