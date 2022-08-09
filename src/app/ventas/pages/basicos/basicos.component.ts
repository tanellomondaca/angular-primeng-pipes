import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

   nombreLower: string = 'tanelo';
   nombreUpper: string = 'TANELO';
   nombreCompleto: string = 'taNeLo';

   fecha: Date = new Date(); // día de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
