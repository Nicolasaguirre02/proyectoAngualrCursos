import { createActionGroup, props } from "@ngrx/store";
import { Alumno } from "../../../../compartido/interfaces/alumno/alumno";

export const accionAutenticacion = createActionGroup({
    source: 'autenticacion',
    events: {
        'usuario autenticado': props<{usuario:Alumno}>(),
    }
})