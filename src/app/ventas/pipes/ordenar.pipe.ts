import { Heroe } from './../interfaces/ventas.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(value: Heroe[], orderTo: string = ''): Heroe[] {
    if (orderTo == '') {
      return value;
    } else {
    }

    switch (orderTo) {
      case 'nombre':
        value = value.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));

        break;
      case 'vuela':
        value = value.sort((a, b) => (a.vuela > b.vuela ? -1 : 1)); // los bool se ordenan de false a true

        break;
      case 'color':
        value = value.sort((a, b) => (a.color > b.color ? 1 : -1)); // los bool se ordenan de false a true

        break;

      default:
        return value;
        break;
    }
    return value;
  }
}
