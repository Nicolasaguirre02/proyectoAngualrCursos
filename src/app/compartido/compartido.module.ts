import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsValidacionesDirective } from './directivas/forms-validaciones.directive';
import { ListaAlumnoPipe } from './pipe/lista-alumno.pipe';
import { TitulosDirective } from './directivas/titulos.directive';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    FormsValidacionesDirective,
    ListaAlumnoPipe,
    TitulosDirective,
    SpinnerComponent,
    
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports:[
    FormsValidacionesDirective,
    ListaAlumnoPipe,
    TitulosDirective,
    SpinnerComponent
  ]
})
export class CompartidoModule { }
