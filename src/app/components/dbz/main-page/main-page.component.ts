import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 2000
    },
    {
      nombre: 'Vegeta',
      poder: 3000
    },
    {
      nombre: 'Krillin',
      poder: 4500
    }
  ]

  nuevo:Personaje = {
    nombre: 'Piccoro',
    poder: 999
  }

  agregarNuevoPersonaje(){
    console.log('main page component');
    
  }
}
