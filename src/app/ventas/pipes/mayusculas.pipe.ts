import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string, enMayus?: boolean): string {
    

    
    return (enMayus) ? value.toUpperCase() : value.toLowerCase();
      
    
  }

}
