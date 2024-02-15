import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appFormsValidaciones]'
})
export class FormsValidacionesDirective {
  private elementoHtml?:ElementRef<HTMLElement>; //El ? porque si no hay errores, puede ser nulo
  private errores?: ValidationErrors | null | undefined;

  @Input() set pasarErrores(valor: ValidationErrors | null | undefined){ //este set se usa para invocará automáticamente.
    this.errores = valor;
    this.verificarErrores();
  }

  constructor(private element: ElementRef<HTMLElement>) {
    this.elementoHtml = element
   }



  verificarErrores(){
    if(!this.elementoHtml){
      return
    } 


    if(!this.errores){
      this.elementoHtml.nativeElement.innerHTML = '';
      return
    }

    

    const listaErrores = Object.keys(this.errores); //transforma el objeto en un array de  claves

    
    if(this.elementoHtml){

       for(const error of listaErrores){
        switch(error){
          case'required':
            this.elementoHtml.nativeElement.innerHTML = '';
            break;
          
          case'minlength':
            if (this.errores) {
              const min = this.errores['minlength']['requiredLength'];
              const valActual = this.errores['minlength']['actualLength'];
              this.elementoHtml.nativeElement.innerHTML = `Mínimo ${min} / ${valActual}`;
            }
            break;

          case'pattern':
          if (this.errores) {
            this.elementoHtml.nativeElement.innerHTML = `Solo numeros positivos`;
          }
          break;

          case'max':
          if(this.errores){
            this.elementoHtml.nativeElement.innerHTML = 'Notas solo del 0 al 10'
          }
        }
      } 

    }

    

    
  }

}
