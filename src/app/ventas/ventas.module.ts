import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CardModule } from 'primeng/card';

// Propios
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenadosComponent } from './pages/ordenados/ordenados.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
   declarations: [
      NumerosComponent,
      NoComunesComponent,
      BasicosComponent,
      OrdenadosComponent,

      MayusculasPipe,
      VuelaPipe,
      OrdenarPipe
   ],
   exports: [
      NumerosComponent,
      NoComunesComponent,
      BasicosComponent,
      OrdenadosComponent,
   ],
   imports: [CommonModule, PrimeNgModule, CardModule],
})
export class VentasModule {}
