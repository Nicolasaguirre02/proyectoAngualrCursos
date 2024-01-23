import { ABMAlumnosModule } from './../../dashboard/componentes/a-b-m-alumnos/a-b-m-alumnos.module';
import { DashboardModule } from './../../dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';

/* imports angular material */
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ABMAlumnosModule
  ],
  exports:[
    SidenavComponent
  ]
})
export class LayoutModule { }
