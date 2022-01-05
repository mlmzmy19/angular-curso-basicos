import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
        <h1>
            {{titulo}}
        </h1>
        <h3>
            La base es: {{ base }}
        </h3>
        
        
            <button (click)=" Acumular(base) " > mas {{base}} </button>
            <span>
            {{ contador }}
            </span>
            <button (click)=" Acumular(-base) " > menos {{base}} </button>
  
            `
})
export class ContadorComponent{
    titulo = 'BASES 1er desarrollo';
    contador: number = 33;
    base:number=5;
  
    Acumular(valor:number){
      this.contador+=valor;
    }
}