import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CardModule } from 'primeng/card';

// Propios
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenadosComponent } from './pages/ordenados/ordenados.component';

@NgModule({
   declarations: [
      NumerosComponent,
      NoComunesComponent,
      BasicosComponent,
      OrdenadosComponent,
   ],
   exports: [
      NumerosComponent,
      NoComunesComponent,
      BasicosComponent,
      OrdenadosComponent,
   ],
   imports: [
      CommonModule,
      PrimeNgModule,
      CardModule],
})
export class VentasModule {}
