import { Color, Heroe } from './../../interfaces/ventas.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enM: boolean = true;

  ordenerTo: string = "";

  heroes: Heroe[] = [
    {
      nombre: "Batman",
      vuela: false,
      color: Color.negro
    },
    {
      nombre: "Superman",
      vuela: true,
      color: Color.azul
    },
    {
      nombre: "GreenLantern",
      vuela: true,
      color: Color.verde
    },
    {
      nombre: "Flash",
      vuela: false,
      color: Color.rojo,
    },
  ];
  
  



  cambiar(){
    this.enM = !this.enM;
  }



  cambiarOrden(value: string){
    this.ordenerTo = value;
  }

}
