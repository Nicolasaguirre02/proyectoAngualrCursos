import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsValidacionesDirective } from './directivas/forms-validaciones.directive';
import { ListaAlumnoPipe } from './pipe/lista-alumno.pipe';
import { TitulosDirective } from './directivas/titulos.directive';



@NgModule({
  declarations: [
    FormsValidacionesDirective,
    ListaAlumnoPipe,
    TitulosDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormsValidacionesDirective,
    ListaAlumnoPipe
  ]
})
export class CompartidoModule { }
