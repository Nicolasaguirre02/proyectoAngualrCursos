import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listaAlumno'
})
export class ListaAlumnoPipe implements PipeTransform {

  transform(item: any): string {
    return item.nombre + ' ' + item.apellido;
  }

}
