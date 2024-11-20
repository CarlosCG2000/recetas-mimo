import { Component, inject, signal, Signal } from '@angular/core';
import { FavoritasRecetasService } from '../../servicios/favoritas-recetas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2-recetas-favoritas.page.html',
  styleUrls: ['tab2-recetas-favoritas.page.scss']
})
export class Tab2RecetasFavoritasPage {

  recetasFavServicio = inject(FavoritasRecetasService)
  // recetasFav = signal<any[]>([])

  constructor() {
    // this.recetasFav.set(this.recetasFavServicio.getRecetasFav())
  }

}
