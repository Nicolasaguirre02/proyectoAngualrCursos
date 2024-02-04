import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  @Input() tamanioSpinner:number = 30;

  tamanio(){
    return this.tamanioSpinner
  }

}
