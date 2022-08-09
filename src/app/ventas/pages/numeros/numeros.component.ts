import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

   ventasNetas: number = 4894956.57454;
   porcentaje: number = 0.488459;

  constructor() { }

  ngOnInit(): void {
  }

}
