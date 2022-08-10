import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipesApp';

  nombre: string = 'TaNeLo MoNdAca';

  constructor(private primeNGconfig: PrimeNGConfig){

  }

  ngOnInit(){
   this.primeNGconfig.ripple = true;
  }

  mostrarConsola(){
    console.log(this.nombre);

  }

}
