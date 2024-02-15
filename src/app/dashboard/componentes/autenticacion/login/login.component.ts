import { Component } from '@angular/core';
import { AutenticacionService } from '../../../../core/servicios/autenticacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = true;

  formularioLogin:FormGroup;

  constructor(private autenticacion:AutenticacionService, private form:FormBuilder){
    this.formularioLogin = form.group({
        nombre: ['', [Validators.required]],
        password: ['', [Validators.required]]
    })
  }


  inicarSesion(){
    if(this.formularioLogin.invalid){
      return
    }else{
      this.autenticacion.inicisarSesion(this.formularioLogin.value);
    }
  }
}
