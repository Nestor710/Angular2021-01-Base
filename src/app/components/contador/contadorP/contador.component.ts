import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styles: [
  ]
})
export class ContadorComponent implements OnInit {

  title:string = 'ContadorApp'
  base: number = 5;
  numero: number = 10;
  numeroEjemplo1:number = 10;
  numeroEjemplo2:number = 10;

  constructor() { }

  ngOnInit(): void {
  }


    // Ejemplo 2 con use de un metodo 
    sumar( valor: number){
      this.numeroEjemplo2 += valor;
    }
    restar(){
      this.numeroEjemplo2 -= 2
    }
    // Ejemplo 3 incrementando en 5
    acumular( valor: number){
      this.numero += valor;
    }
  
}
