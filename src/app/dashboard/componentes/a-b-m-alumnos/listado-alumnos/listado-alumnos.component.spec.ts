import { TestBed } from "@angular/core/testing"
import { ListadoAlumnosComponent } from "./listado-alumnos.component"
import {MockProvider} from 'ng-mocks'
import { of } from 'rxjs';
import { CargaMockAlumnosService } from "../../../../core/servicios/carga-mock-alumnos.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe("Prueba de alumnos component", () => {
    let componente:ListadoAlumnosComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            declarations: [ListadoAlumnosComponent],
            providers:[
                MockProvider(CargaMockAlumnosService, {
                    listarAlumnos: () => 
                        of([
                            {
                                idAlumno: 1707863267920,
                                id: "6c45",
                                password: "12345",
                                nombre: "hernann",
                                apellido: "fernandez",
                                edad: 22,
                                curso: "Java",
                                tipo: "ALUMNO",
                                nombreUsuario: "hernanF"
                              },
                              {
                                idAlumno: 1707863267920,
                                id: "6c45",
                                password: "12345",
                                nombre: "hernann",
                                apellido: "fernandez",
                                edad: 22,
                                curso: "Java",
                                tipo: "ALUMNO",
                                nombreUsuario: "hernanF"
                              }
                        ])
                })],
        });
    
    componente = TestBed.createComponent(ListadoAlumnosComponent).componentInstance;
    })

    it('Las columnas de la tabla alumnos deben ser idAlumo, nombreapellido, edad, curso, acciones', () => {
        expect(componente.displayedColumns).toContain('idAlumno');
        expect(componente.displayedColumns).toContain('nombreApellido');
        expect(componente.displayedColumns).toContain('edad');
        expect(componente.displayedColumns).toContain('curso');
        expect(componente.displayedColumns).toContain('acciones');
    })




})