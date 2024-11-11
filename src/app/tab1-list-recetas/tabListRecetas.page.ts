import { Component, inject } from '@angular/core';
import { RecetasService } from '../servicios/recetas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tabListRecetas.page.html',
  styleUrls: ['tabListRecetas.page.scss']
})
export class TabListRecetasPage {

  estado = true
  recetasServicio = inject(RecetasService)
  recetas:any[] = []

  constructor() {
    this.recetasServicio.getRecetasCategoria('Seafood')
    .subscribe((recetas:any) => {
      this.recetas = recetas.meals
    })
  }

}
