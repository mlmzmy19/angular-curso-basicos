import { Component } from '@angular/core';



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre:string='Iroman';
    edad:number=45;
    iteracionEdad:number=0;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return ` ${ this.nombre } - ${ this.edad }`;
    }

    cambiarHeroe():void {
        this.nombre='Spiderman';
    }
    
    cambiarEdad():void {
        this.iteracionEdad+=1;
        console.log(`Contador clic Edad: ${this.iteracionEdad}}`);
        this.edad=22;
    }
}