import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map, mergeMap, timer } from 'rxjs';
import { Alumno } from '../../compartido/interfaces/alumno/alumno';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CargaMockAlumnosService {
  private listaAlumnos$ = new BehaviorSubject<Alumno[]>([]);

  
  alumnos$ = this.listaAlumnos$.asObservable();

  constructor(private httpClient:HttpClient) { 

  }

  generarToken(): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const longitud = 32;
    let token = '';
    
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      token += caracteres.charAt(indiceAleatorio);
    }
    
    return token;
  }
  

  //Esta funcion retorna un observable
  listarAlumnos(): Observable<Alumno[]> {
    /* return this.alumnos$ */
    return this.httpClient.get<Alumno[]>(`${environment.apiURL}/students/?tipo=ALUMNO`).pipe(delay(2000));
  }



 guardarNuevoAlumno(alumno:Alumno){
    let nuevoAlumno:Alumno = {...alumno, idAlumno: new Date().getTime(), token:this.generarToken()}
/*     console.log("mostrar alumno", nuevoAlumno); */
    return this.httpClient.post<Alumno>(`${environment.apiURL}/students`,nuevoAlumno).pipe(mergeMap(() => this.listarAlumnos()));
  } 


  alumnoPorID(alumnoModificado: any) {

    return this.httpClient.put(`${environment.apiURL}/students/${alumnoModificado.id}`, alumnoModificado)

  }


  eliminarAlumno(id:number|string){
   return this.httpClient.delete(`${environment.apiURL}/students/${id}`)
  }
}
