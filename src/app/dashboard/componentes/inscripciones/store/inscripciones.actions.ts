import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CrearInscripcionI, InscripcionesI } from '../models/inscripciones.interface';
import { Alumno } from '../../../../compartido/interfaces/alumno/alumno';
import { cursosI } from '../../../../compartido/interfaces/cursos/curso';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Cargar Inscripcioness': emptyProps(),
    'Cargar Inscripcioness Success': props<{ data: InscripcionesI[] }>(),
    'Cargar Inscripcioness Failure': props<{ error: unknown }>(),

    'Cargar alumnos': emptyProps(), //Disparador de accion de alumnos
    'Cargar alumnos Succes': props<{data: Alumno[] }>(),
    'Cargar alumnos Failure': props<{error:unknown}>(),

    'Cargar cursos': emptyProps(), 
    'Cargar cursos Succes': props<{data: cursosI[] }>(),
    'Cargar cursos Failure': props<{error:unknown}>(),

    'Nueva inscripcion': props<{data:CrearInscripcionI}>(), 
    'Nueva inscripcion Succes': props<{data: InscripcionesI }>(),
    'Nueva inscripcion Failure': props<{error:unknown}>(),

    'Eliminar inscripcion':  props<{data:number|string}>(),
    'Eliminar inscripcion succes': props<{data:number|string}>(),
    'Elimninar inscripcion Failure': props<{error: unknown}>()
  }
});
