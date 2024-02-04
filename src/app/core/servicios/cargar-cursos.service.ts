import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cursosI } from '../../compartido/interfaces/cursos/curso';

@Injectable({
  providedIn: 'root'
})
export class CargarCursosService {

  private listaCursos$ = new BehaviorSubject<cursosI[]>([
    {idCurso: 1, nombreCurso: 'Angular', inicio: new Date("2024-02-03"), finaliza:new Date("2024-10-03")}, 
    {idCurso: 2, nombreCurso: 'SQL', inicio: new Date("2023-05-03"), finaliza:new Date("2024-01-03")}, 
  ])

  cursos = this.listaCursos$.asObservable();

  constructor() { }

  mostrarCursos(): Observable<cursosI[]>{
    return this.cursos
  }

  guardarNuevocurso(nuevocurso: cursosI): void{
    const listaCactualizada = [{...nuevocurso, idCurso: new Date().getTime()}, ...this.listaCursos$.value];
    this.listaCursos$.next(listaCactualizada);
  }


  eliminarCurso(id: number){
    const listaFiltrada = this.listaCursos$.value.filter(eliminar => eliminar.idCurso != id);
    this.listaCursos$.next(listaFiltrada);
  }

  editarCursiID(id: number, data:cursosI){
    const listaCactualizada = this.listaCursos$.value.map((curso) => (curso.idCurso === id ? {...curso, ...data}: curso ));
    this.listaCursos$.next(listaCactualizada);
  }
}
