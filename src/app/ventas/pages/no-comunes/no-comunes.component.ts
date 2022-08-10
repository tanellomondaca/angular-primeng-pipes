import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{
   // i18nSelect
   nombre: string = 'Génesis';
   genero: string = 'femenino';

   invitacionMap = {
      'masculino' : 'invitarlo',
      'femenino'  : 'invitarla'
   }
   // i18nPlural
   clientes: string[] = ['Tanelo', 'Esteban', 'Génesis', 'Ismael'];

   clientesMap = {
      '=0': 'no tenemos ningún cliente esperando',
      '=1': 'tenemos un cliente esperando.',
      '>2': 'tenemos 2 clientes esperando.',
      'other': 'tenemos # clientes esperando.'
   }

   cambiarCliente(){
      if(this.genero === 'femenino'){
         this.nombre = 'Tanelo';
         this.genero = 'masculino';
      }else{
         this.nombre = 'Génesis';
         this.genero = 'femenino';

      }
   }

   atenderCliente(){
      this.clientes.pop();
   }

   // KeyValue Pipe
   persona =
   {
      nombre: 'Tanelo',
      edad: 25,
      ubicacion: 'San Antonio, Chile'
   }

   // Json Pipe
   personaArray = [
      {
         nombre: 'Tanelo',
         edad: 25,
         ubicacion: 'San Antonio, Chile'
      },
      {
         nombre: 'Genesis',
         edad: 24,
         ubicacion: 'San Antonio, Chile'
      },
      {
         nombre: 'Esteban',
         edad: 1,
         ubicacion: 'San Antonio, Chile'
      },
   ]

   //Async pipe
   miObservable = interval(10);



}
