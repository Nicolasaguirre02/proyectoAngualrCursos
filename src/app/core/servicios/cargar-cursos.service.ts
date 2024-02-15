import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, mergeMap } from 'rxjs';
import { cursosI } from '../../compartido/interfaces/cursos/curso';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CargarCursosService {

  private listaCursos$ = new BehaviorSubject<cursosI[]>([])

  cursos = this.listaCursos$.asObservable();

  constructor(private httpCliente:HttpClient) { }

  mostrarCursos(): Observable<cursosI[]>{
    return this.httpCliente.get<cursosI[]>(`${environment.apiURL}/courses`)
  }

  guardarNuevocurso(nuevocurso: cursosI): Observable<cursosI[]>{
    const listaCactualizada = {...nuevocurso, idCurso: new Date().getTime()}  ;
    /* this.listaCursos$.next(listaCactualizada); */
    console.log("ver lisa", listaCactualizada)
    return this.httpCliente.post<cursosI[]>(`${environment.apiURL}/courses`, listaCactualizada).pipe(mergeMap(()=>this.mostrarCursos()))
  }


  eliminarCurso(id: number|string){
    /* const listaFiltrada = this.listaCursos$.value.filter(eliminar => eliminar.idCurso != id);
    this.listaCursos$.next(listaFiltrada); */
    return this.httpCliente.delete(`${environment.apiURL}/courses/${id}`)
  }

  editarCursiID(/* id: number|string, data:cursosI */ curso:any){
    /* const listaCactualizada = this.listaCursos$.value.map((curso) => (curso.idCurso === id ? {...curso, ...data}: curso ));
    this.listaCursos$.next(listaCactualizada); */

    return this.httpCliente.put(`${environment.apiURL}/courses/${curso.id}`, curso);
  }
}
