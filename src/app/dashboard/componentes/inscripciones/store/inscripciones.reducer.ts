import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { InscripcionesI } from '../models/inscripciones.interface';
import { Alumno } from '../../../../compartido/interfaces/alumno/alumno';
import { cursosI } from '../../../../compartido/interfaces/cursos/curso';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
  inscripciones: InscripcionesI[],
  alumnos:Alumno[],
  cursos:cursosI[],
  cargando:boolean,
  alumnosCargador:boolean,
  cursosCargado:boolean,
  error:unknown
}

export const initialState: State = {
  inscripciones: [],
  alumnos:[],
  cursos:[],
  cargando:false,
  alumnosCargador:false,
  cursosCargado:false,
  error:null
};

export const reducer = createReducer(
  initialState,
  on(InscripcionesActions.cargarInscripcioness, state => ({...state, cargando:true})),
  on(InscripcionesActions.cargarInscripcionessSuccess, (state, action) => ({...state, cargando:false, inscripciones: action.data})),
  on(InscripcionesActions.cargarInscripcionessFailure, (state, action) => ({...state, cargando:false, error: action.error})),

  on(InscripcionesActions.cargarAlumnos, (state) =>  {
    return {
      ...state,
      alumnosCargador:true
    }
  }),
  on(InscripcionesActions.cargarAlumnosSucces, (state, action) => {
    return {
      ...state,
      alumnos:action.data
    }
  }),

  on(InscripcionesActions.cargarCursos, (state) => {
    return {
      ...state, 
      cursosCargado: true
    };
  }),

  on(InscripcionesActions.cargarCursosSucces, (state, action) => {
    return{
      ...state,
      cursos:action.data
    }
  })
);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

