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
    console.log("soy mock")
  }

  

  //Esta funcion retorna un observable
  listarAlumnos(): Observable<Alumno[]> {
    /* return this.alumnos$ */
    return this.httpClient.get<Alumno[]>(`${environment.apiURL}/students`).pipe(delay(2000))
  }



 guardarNuevoAlumno(alumno:Alumno){
    let nuevoAlumno:Alumno = {...alumno, idAlumno: new Date().getTime()}
/*     console.log("mostrar alumno", nuevoAlumno); */
    return this.httpClient.post<Alumno>(`${environment.apiURL}/students`,nuevoAlumno).pipe(mergeMap(() => this.listarAlumnos()));
  } 


  alumnoPorID(alumnoModificado: any) {
    console.log("esto se va a modificar", alumnoModificado)
    return this.httpClient.put(`${environment.apiURL}/students/${alumnoModificado.id}`, alumnoModificado)

  }


  eliminarAlumno(id:number|string){
   return this.httpClient.delete(`${environment.apiURL}/students/${id}`)
  }
}
