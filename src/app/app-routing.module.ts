import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dashboard/componentes/autenticacion/login/login.component';
import { ListadoAlumnosComponent } from './dashboard/componentes/a-b-m-alumnos/listado-alumnos/listado-alumnos.component';
import { SidenavComponent } from './layouts/layout/sidenav/sidenav.component';
import { ListadoCursosComponent } from './dashboard/componentes/a-b-m-cursos/listado-cursos/listado-cursos.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:SidenavComponent,
    children: [
      {
        path:'alumno',
        component:ListadoAlumnosComponent
      },
      {
        path:'curso',
        component:ListadoCursosComponent
      }
    ]
  },
  {
    path:'autenticacion',
    component: LoginComponent
  },
  {
    path:'**',
    redirectTo:'LoginComponent'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
