import { createFeatureSelector, createSelector } from "@ngrx/store";
import { estadoAutenticacion, featureNanme } from "../reducers";

export const selectorAutenticacionEstado = createFeatureSelector<estadoAutenticacion>(featureNanme)

export const selectorUsuario = createSelector(
    selectorAutenticacionEstado, 
    (estado) => estado.usuario)
