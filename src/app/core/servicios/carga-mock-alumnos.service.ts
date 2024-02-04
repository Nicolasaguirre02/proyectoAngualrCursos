import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, timer } from 'rxjs';
import { Alumno } from '../../compartido/interfaces/alumno/alumno';

@Injectable({
  providedIn: 'root'
})
export class CargaMockAlumnosService {
  private listaAlumnos$ = new BehaviorSubject<Alumno[]>([
    { idAlumno: 1, nombre: 'Nicolas', apellido: 'Aguirre', edad: 21, curso: 'Angular', nota: 8 },
    { idAlumno: 2, nombre: 'Hernan', apellido: 'Fernandez', edad: 29, curso: 'SQL', nota: 9 },
  ]);

  
  alumnos$ = this.listaAlumnos$.asObservable();

  constructor() { 
    console.log("soy mock")
  }

  

  //Esta funcion retorna un observable
  listarAlumnos(): Observable<Alumno[]> {
    /* return this.alumnos$ */

    return timer(2000).pipe(
      map(() => this.listaAlumnos$.getValue())
    ); 
  }



 guardarNuevoAlumno(nuevoAlumno:Alumno): void{
    const listaActualizada = [{...nuevoAlumno, idAlumno: new Date().getTime()} , ...this.listaAlumnos$.value]
    this.listaAlumnos$.next(listaActualizada)
  } 


  modificarAlumno(alumnoModificado: Alumno) : void{
    const lista = this.listaAlumnos$.value;
    const index = lista.findIndex( (alumno) => alumno.idAlumno == alumnoModificado.idAlumno );

    if (index !== -1) {
      // Actualizar el alumno en la lista
      lista[index] = { ...lista[index], ...alumnoModificado };
      
      // Emitir la lista actualizada a través de BehaviorSubject
      this.listaAlumnos$.next([...lista]);
  
      console.log("Lista de alumnos modificada:", lista);
    }
  }
}
