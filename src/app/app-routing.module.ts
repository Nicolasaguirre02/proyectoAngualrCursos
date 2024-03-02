import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dashboard/componentes/autenticacion/login/login.component';
import { ListadoAlumnosComponent } from './dashboard/componentes/a-b-m-alumnos/listado-alumnos/listado-alumnos.component';
import { SidenavComponent } from './layouts/layout/sidenav/sidenav.component';
import { ListadoCursosComponent } from './dashboard/componentes/a-b-m-cursos/listado-cursos/listado-cursos.component';
import { autenticacionGuard } from './core/guards/autenticacion.guard';

const routes: Routes = [
  {
    path:'dashboard',
    canActivate:[autenticacionGuard],
    component:SidenavComponent,
    children: [
      {
        path:'alumno',
        loadChildren: () => import('./dashboard/componentes/a-b-m-alumnos/alumnos-routing.module').then((mod) => mod.AlumnosRoutingModule)
      },
      {
        path:'cursos',
        loadChildren: () => import("./dashboard/componentes/a-b-m-cursos/cursos-routing.module").then((m) => m.CursosRoutingModule)
      },
      {
        path:'inscripciones',
        loadChildren: () => import("./dashboard/componentes/inscripciones/inscripciones-routing.module").then((m) => m.InscripcionesRoutingModule )
      },
      {
        path:'**',
        redirectTo:'cursos'
      } 
    ]
  },
  {
    path:'autenticacion',
    component: LoginComponent
  },
  {
    path:'**',
    redirectTo:'autenticacion'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
