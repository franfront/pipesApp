import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  
nombreLower: string = "fernandez";
nombreUpper: string = "FERNANDEZ";
nombreCompleto: string = "FranCo FernNanDez";

fecha: Date = new Date();



}
