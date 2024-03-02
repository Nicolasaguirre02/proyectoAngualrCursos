import { Alumno } from "../../../../compartido/interfaces/alumno/alumno";
import { cursosI } from "../../../../compartido/interfaces/cursos/curso";

export interface InscripcionesI {
    
    courseId:string | number,
    studentId: string | number,
    student?:Alumno,
    course?:cursosI
}

export interface CrearInscripcionI {
    courseId:string | number,
    studentId: string | number,
}