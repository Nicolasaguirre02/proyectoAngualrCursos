import { HttpClientModule } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { AutenticacionService } from "../../../../core/servicios/autenticacion.service"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { CompartidoModule } from "../../../../compartido/compartido.module"
import { By } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

describe('Login', () => {
    let componente:LoginComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[HttpClientModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatButtonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BrowserAnimationsModule,
                    CompartidoModule],
            declarations:[LoginComponent],
            providers:[AutenticacionService]
        });

    componente = TestBed.createComponent(LoginComponent).componentInstance;

    });

    it("Inicio de sesion instanciado", () => {
        expect(componente).toBeTruthy(); //Verifica si el componente fue instanciado correctamente
    });

    it("Verificar validacion del fomulario 'valido/invalido'", () => {
        const fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();
        const usuario = componente.formularioLogin.controls['nombre'];
        const password = componente.formularioLogin.controls['password'];
        
        usuario.setValue('nicolas');
        password.setValue('12345');

        expect(componente.formularioLogin.valid).toBeTrue();
    })

})