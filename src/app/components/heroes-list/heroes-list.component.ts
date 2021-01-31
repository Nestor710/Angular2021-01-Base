import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {

  nombre:string = 'Ironman';
  edad:number = 40;

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return `${ this.nombre }-${ this.edad }`
  }

  cambiarHeroe():void{
    this.nombre = 'spiderman';
  }

  cambiarEdad():void{
    this.edad = 30
  }
}