import { Injectable } from '@angular/core';
import { Alumno } from '../../compartido/interfaces/alumno/alumno';
import { Router } from '@angular/router';
import { ServicioAlertaService } from './servicio-alerta.service';
import { Observable, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Este servicio que se utiliza para almacenar un token, y si realizar el login
export class AutenticacionService {

  loginUsuario: Alumno | null = null;

  constructor(private router:Router, private alertaServicio:ServicioAlertaService) { }
  

  inicisarSesion(datos:any){
    this.loginUsuario={
      idAlumno: new Date().getMilliseconds(),
      nombre:"nicolas",
      apellido:"aguirre",
      curso:"SQL",
      nota:10,
      edad:21,
      password:"12345"
    };

    if(this.loginUsuario?.nombre === datos.nombre && this.loginUsuario.password === datos.password){
      this.router.navigate(['dashboard','alumno']),
      localStorage.setItem('token', 'vfvrfe44rf4rf44srfrg2jw4thgniwnbfawai4')
    }else{
      this.alertaServicio.error("Datos incorrectos")
    }
    console.log(this.loginUsuario)
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
