import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment/environment';
import { CrearInscripcionI, InscripcionesI } from '../models/inscripciones.interface';
import { Observable } from 'rxjs';
import { Alumno } from '../../../../compartido/interfaces/alumno/alumno';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  constructor(private http:HttpClient) { }

  getIncripciones(){
    return this.http.get<InscripcionesI[]>(`${environment.apiURL}/registrations?_embed=course&_embed=student`)
  }

  getAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${environment.apiURL}/students?tipo=ALUMNO`)
  }

 nuevaInscripcion(data:CrearInscripcionI){
    return this.http.post<CrearInscripcionI>(`${environment.apiURL}/registrations`, data)
 }


 eliminarInscripcion(id:number | string){
  return this.http.delete(`${environment.apiURL}/registrations/${id}`)
 }
}
