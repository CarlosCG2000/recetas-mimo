import { Component, inject, Input, OnInit } from '@angular/core';
import { FavoritasRecetasService } from 'src/app/servicios/favoritas-recetas.service';
import { RecetasService } from 'src/app/servicios/recetas.service';

@Component({
  selector: 'app-receta-simple',
  templateUrl: './receta-simple.component.html',
  styleUrls: ['./receta-simple.component.scss'],
})
export class RecetaSimpleComponent implements OnInit {

  @Input() receta: any;

  private recetaService = inject(RecetasService)
  private recetasFavoritas = inject(FavoritasRecetasService)

  constructor() { }

  ngOnInit() {
    console.log("Hola mundo")

    //buscar la receta completa por su id
    this.recetaService.getRecetaById(this.receta.idMeal)
    .subscribe((receta:any) => {
      this.receta = receta.meals[0]
      //console.log(this.receta)
    })

    // Comprobamos que la receta se encuentra en el LocalStorage de recetas favoritas para devolver el icono de de estrella con o sin relleno
    //...

  }

}
