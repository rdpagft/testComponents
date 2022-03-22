import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.scss']
})
export class BuscarUsuarioComponent implements OnInit {
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() { }

  ngOnInit(): void {
  }

}
