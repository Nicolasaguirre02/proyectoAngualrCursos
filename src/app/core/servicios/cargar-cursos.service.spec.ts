import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { CargarCursosService } from "./cargar-cursos.service";

describe("Servicio cargar cursos", () => {
    let servicio: CargarCursosService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [CargarCursosService]
        });

        servicio = TestBed.inject(CargarCursosService);
    });

    it('Ver si fue cargado correctamente', () => {
        expect(servicio).toBeTruthy();
    });
});
