import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map, mergeMap, timer } from 'rxjs';
import { Alumno } from '../../compartido/interfaces/alumno/alumno'; 
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CargarAlumnosService {

  private listaAlumnos$ = new BehaviorSubject<Alumno[]>([ ]);


  // Observable que permite a otros componentes o servicios suscribirse para recibir actualizaciones de estudiantes
  // de una forma mas segura.
  alumnos$ = this.listaAlumnos$.asObservable();

  constructor(private httpClient: HttpClient) { }

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
    /* return timer(2000).pipe(
      map(() => this.listaAlumnos$.getValue())
    ); */ 
    return this.httpClient.get<Alumno[]>(`${environment.apiURL}/students/?tipo=ALUMNO`).pipe(delay(2000));
  }



  guardarNuevoAlumno(alumno:Alumno){
    let nuevoAlumno:Alumno = {...alumno, idAlumno: new Date().getTime(), token:this.generarToken()}
    console.log("mostrar alumno", nuevoAlumno); 
    return this.httpClient.post<Alumno>(`${environment.apiURL}/students`,nuevoAlumno).pipe(mergeMap(() => this.listarAlumnos()));
    /* ver.subscribe((resp) => {console.log(resp)} ); */
  } 


  alumnoPorID(alumnoModificado: any) {
    console.log("esto se va a modificar", alumnoModificado)
    return this.httpClient.put(`${environment.apiURL}/students/${alumnoModificado.id}`, alumnoModificado)

/*     const lista = this.listaAlumnos$.value;
    const index = lista.findIndex( (alumno) => alumno.idAlumno == alumnoModificado.idAlumno );

    if (index !== -1) {
      // Actualizar el alumno en la lista
      lista[index] = { ...lista[index], ...alumnoModificado };
      
      // Emitir la lista actualizada a través de BehaviorSubject
      this.listaAlumnos$.next([...lista]);
  
      console.log("Lista de alumnos modificada:", lista);
    } */
  }

  eliminarAlumno(id:string|number){

    return this.httpClient.delete(`${environment.apiURL}/students/${id}`)
  }
}
