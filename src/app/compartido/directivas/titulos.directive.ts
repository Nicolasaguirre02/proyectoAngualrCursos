import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective implements OnInit {

  constructor(private elemento: ElementRef, private rend: Renderer2) {
   }


  ngOnInit() {
    this.rend.setStyle(this.elemento.nativeElement, 'font-size', '20px');
  }



}
