import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { map } from 'rxjs';

export const autenticacionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const autenticacionServicio = inject(AutenticacionService);


  /* return !!autenticacionServicio.loginUsuario ? true : router.createUrlTree(['autenticacion']); */

 return autenticacionServicio.verificarToken().pipe(map((autenticado) => autenticado ? true: router.createUrlTree(['autenticacion']) ))
};

