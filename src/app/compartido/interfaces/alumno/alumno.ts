export interface Alumno {
    idAlumno:number|string,
    id?:number|string,
    nombre:string,
    apellido:string,
    edad:number,
    nombreUsuario:string;
    password:string,
    tipo:string,
    token?:string
}
