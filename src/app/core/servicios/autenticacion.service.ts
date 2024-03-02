import { Injectable } from '@angular/core';
import { Alumno } from '../../compartido/interfaces/alumno/alumno';
import { Router } from '@angular/router';
import { ServicioAlertaService } from './servicio-alerta.service';
import { Observable, delay, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Store } from '@ngrx/store';
import { accionAutenticacion } from '../store/autenticacion/actions';

@Injectable({
  providedIn: 'root'
})

//Este servicio que se utiliza para almacenar un token, y si realizar el login
export class AutenticacionService {

  loginUsuario: Alumno | null = null;

  constructor(private router:Router, 
              private alertaServicio:ServicioAlertaService, 
              private httpCliente: HttpClient,
              private store:Store) { }
  

  inicisarSesion(datos:Alumno){
    this.httpCliente.get<Alumno[]>
    (`${environment.apiURL}/students/?nombreUsuario=${datos.nombre}&password=${datos.password}`)
    .subscribe({
      next: (alunmo)=>{
        if(alunmo.length > 0){
          const usuario = alunmo[0];
          this.router.navigate(['dashboard','alumno']),
          this.store.dispatch(accionAutenticacion.usuarioAutenticado({usuario})),
          this.asignarToken(alunmo[0]);

        }else{
          this.alertaServicio.error("Datos incorrectos")
        }
        
      }
    });
    
  }

  asignarToken(datos:Alumno){
    if(datos.token){
      localStorage.setItem('token', datos.token)
    }
  }

  salir(){
    this.loginUsuario = null;
    localStorage.removeItem('token')
  }


  verificarToken(){
    /* return of(localStorage.getItem('token')) */

    return new Observable((obser) => {
      obser.next(localStorage.getItem('token'))
    })
    .pipe(delay(1000), map((respuesta) =>  !!respuesta))
  }  
}
