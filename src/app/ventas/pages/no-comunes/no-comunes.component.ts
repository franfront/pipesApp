import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  nombre: string = 'Franco';
  genero: string = 'masculino';

  invitacionM = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Mario', 'Hernando'];
  clientesM = {
    '=0': 'no hay clientes.',
    '=1': 'hay un cliente esperando',
    '=2': 'hay 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarC() {
    this.nombre = 'Denise';
    this.genero = 'femenino';
  }

  borrarC() {
    this.clientes.shift();
  }

  persona = {
    nombre: 'Franco',
    edad: 20,
    dirección: 'Buenos Aires, Argentina',
  };

  heroes = [
    { nombre: 'Batman', vuela: false },
    { nombre: 'Superman', vuela: true },
    { nombre: 'Wonder Woman', vuela: true },
  ];

  miObservable = interval(1000);

  valorP = new Promise((res, rej) => {
    setTimeout(() => {
      res('Fin de la promesa');
    }, 3500);
  });
}
