import { TestBed } from "@angular/core/testing"
import { ListadoAlumnosComponent } from "./listado-alumnos.component"
import {MockProvider} from 'ng-mocks'
import { of } from 'rxjs';
import { CargaMockAlumnosService } from "../../../../core/servicios/carga-mock-alumnos.service";
import { HttpClient } from "@angular/common/http";
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
                                idAlumno: 1707751450671,
                                id: "b302",
                                password: "ds",
                                nombre: "wwwww",
                                apellido: "cdcdcdc",
                                edad: 32,
                                curso: "Angular",
                                nota: 3
                              },
                              {
                                id: "2da0",
                                nombre: "deded",
                                apellido: "deded",
                                edad: 2,
                                curso: "Angular",
                                nota: 2,
                                password: "d",
                                idAlumno: 1707751625296
                              }
                        ])
                })],
        });
    
    componente = TestBed.createComponent(ListadoAlumnosComponent).componentInstance;
    })

    it('Las columnas de la tabla alumnos deben ser idAlumo, nombreapellido, edad, curso, nota, acciones', () => {
        expect(componente.displayedColumns).toContain('idAlumno');
        expect(componente.displayedColumns).toContain('nombreApellido');
        expect(componente.displayedColumns).toContain('edad');
        expect(componente.displayedColumns).toContain('curso');
        expect(componente.displayedColumns).toContain('nota');
        expect(componente.displayedColumns).toContain('acciones');
    })




})