import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[]=['Spiderman','Iroman','Thor','Hulk','Capitán América'];
  heroeBorrado:string='';

borrarHeroe():void{
  if (this.heroes.length>0) {
    this.heroeBorrado=this.heroes[this.heroes.length-1];
    this.heroes.length=this.heroes.length-1;
  }
}
}
