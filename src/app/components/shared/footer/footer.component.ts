import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mostrarMenuRestante: boolean;
  constructor() {
    this.mostrarMenuRestante = false
  }


  ngOnInit(): void {
  }
  mostrarOpcionesRestantes(){
    console.log("mostrar menu");
    this.mostrarMenuRestante =  true
  }
  ocultarOpcionesRestantes(){
    console.log("mostrar menu");
    this.mostrarMenuRestante =  false
  }
}
