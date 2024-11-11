import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta-detallada',
  templateUrl: './receta-detallada.component.html',
  styleUrls: ['./receta-detallada.component.scss'],
})
export class RecetaDetalladaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Hola mundo")
  }

}
