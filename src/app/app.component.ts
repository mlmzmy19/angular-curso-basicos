import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'BASES 1er desarrollo';
  contador: number = 33;
  base:number=5;

  Acumular(valor:number){
    this.contador+=valor;
  }
}

