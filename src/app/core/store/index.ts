import { autenticacionReduce, featureNanme } from "./autenticacion/reducers";


export const appReducers = {
    [featureNanme] : autenticacionReduce,
}