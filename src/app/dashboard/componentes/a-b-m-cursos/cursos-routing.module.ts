import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';

const routes: Routes = [
  {
    path:"",
    component:ListadoCursosComponent  
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class CursosRoutingModule { }
