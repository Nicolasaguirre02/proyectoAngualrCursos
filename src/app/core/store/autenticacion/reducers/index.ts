import { createReducer, on } from "@ngrx/store";
import { Alumno } from "../../../../compartido/interfaces/alumno/alumno";
import { accionAutenticacion } from "../actions";

export const featureNanme = 'autenticacion';

export interface estadoAutenticacion {
    usuario : Alumno | null;
}

const estadoInicial:estadoAutenticacion = {
    usuario: null
}

export const autenticacionReduce = createReducer(estadoInicial,
    on(accionAutenticacion.usuarioAutenticado, (estado, actions) => {
    return {
        ...estado, 
        usuario: actions.usuario
    }
}))