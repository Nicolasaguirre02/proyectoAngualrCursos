import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscripcionesActions } from './inscripciones.actions';
import { InscripcionesService } from './inscripciones.service';
import { CargarCursosService } from '../../../../core/servicios/cargar-cursos.service';


@Injectable()
export class InscripcionesEffects {

  cargarInscripcioness$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.cargarInscripcioness),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.inscripcionesSerivico.getIncripciones().pipe(
          map(data => InscripcionesActions.cargarInscripcionessSuccess({ data })),
          catchError(error => of(InscripcionesActions.cargarInscripcionessFailure({ error }))))
      )
    );
  });

  cargarAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.cargarAlumnos),

      concatMap(() => 
        this.inscripcionesSerivico.getAlumnos().pipe(
          map(data => InscripcionesActions.cargarAlumnosSucces({data})),
          catchError(error => of(InscripcionesActions.cargarAlumnosFailure({error})))
        ))
    )
  })

  cargarCursos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.cargarCursos),

      concatMap(() => 
        this.cursosServicio.mostrarCursos().pipe(
          map( data => InscripcionesActions.cargarCursosSucces({data})),
          catchError(error => of(InscripcionesActions.cargarCursosFailure({error})))
        )
      )
    )
  })


  nuevaInscripcioin$ = createEffect(() => { 
    return this.actions$.pipe(
      ofType(InscripcionesActions.nuevaInscripcion),

      concatMap((action) => {
          return this.inscripcionesSerivico.nuevaInscripcion(action.data).pipe(
            map((resp) => InscripcionesActions.nuevaInscripcionSucces({data:resp})),
            catchError((error) => of(InscripcionesActions.nuevaInscripcionFailure({error})))
          )
      })
    )
  })


  nuevaInscripcioinSucces$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.nuevaInscripcionSucces),

      map(() => InscripcionesActions.cargarInscripcioness())
    )
  })


  eliminarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.eliminarInscripcion),

      concatMap((action) => {
        return this.inscripcionesSerivico.eliminarInscripcion(action.data).pipe(
          map((resp) => InscripcionesActions.eliminarInscripcionSucces({data:"Eliminado"})),
          catchError((error) => of(InscripcionesActions.elimninarInscripcionFailure({error})))
        )
      })
    )
  })



  constructor(private actions$: Actions, private inscripcionesSerivico:InscripcionesService, private cursosServicio: CargarCursosService) {}
}
