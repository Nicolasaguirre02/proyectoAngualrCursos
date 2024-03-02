import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { CargarCursosService } from "./cargar-cursos.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { cursosI } from "../../compartido/interfaces/cursos/curso";
import { environment } from "../../../environment/environment";

describe("Servicio cargar cursos", () => {
    let servicio: CargarCursosService;
    let httpMock: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CargarCursosService]
      });
  
      servicio = TestBed.inject(CargarCursosService);
      httpMock = TestBed.inject(HttpTestingController);
    });

    it('Servicio cursos instanciado correctamente', () => {
        expect(servicio).toBeTruthy();
    });

    it("Guardar un nuevo curso 'POST'", () => {
        const cursoMock:cursosI = {idCurso:13, nombreCurso:"nuevoTest", inicio: new Date(), finaliza: new Date()};
        const respuestaMock = [cursoMock]

        servicio.guardarNuevocurso(cursoMock).subscribe((curso) => {
            expect(curso).toEqual(respuestaMock);
            console.log("cursosss", expect(curso)) 
            alert("lla")//Verifica si son iguales
        })

        const req = httpMock.expectOne(`${environment.apiURL}/courses`); //expectOne() verifica si existe la url esperada
        expect(req.request.method).toEqual('POST') //Verifica si el metodo es POST

        req.flush(respuestaMock) 
    })
});
