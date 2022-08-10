import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';
import { OrdenarPipe } from '../../pipes/ordenar.pipe';

@Component({
  selector: 'app-ordenados',
  templateUrl: './ordenados.component.html',
  styles: [
  ]
})
export class OrdenadosComponent  {
   enMayusculas: boolean = true;

   ordenarPor: string = '';

   heroes: Heroe[] = [
      {
         nombre: 'Superman',
         vuela: true,
         color: Color.azul
      },
      {
         nombre: 'Batman',
         vuela: false,
         color: Color.negro
      },
      {
         nombre: 'Spiderman',
         vuela: false,
         color: Color.rojo
      },
      {
         nombre: 'Linterna verde',
         vuela: true,
         color: Color.verde
      },
   ]

   cambiar(){
      this.enMayusculas = !this.enMayusculas;
   }

   cambiarOrden( valor: string){
      this.ordenarPor = valor;
   }


}
