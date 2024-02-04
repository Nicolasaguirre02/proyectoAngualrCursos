import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ServicioAlertaService {

  constructor() { }

  succes(mensaje:string){
    return Swal.fire({
      position: "center",
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    });
  }

  mostrarAlertaEliminar(mensaje:string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      Swal.fire({
        title: mensaje,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText:"Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado!",
            icon: "success"
          });
          resolve(true); // Resuelve la promesa como true si se confirma la eliminación
        } else {
          resolve(false); // Resuelve la promesa como false si se cancela la eliminación
        }
      });
    });
  }
}
