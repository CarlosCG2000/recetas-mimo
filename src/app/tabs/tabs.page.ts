import { Component, inject, signal } from '@angular/core';
import { RecetasService } from '../servicios/recetas.service';
import { FavoritasRecetasService } from '../servicios/favoritas-recetas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  // constructor() {}
  // recetasServicio = inject(RecetasService)
  // recetasFavServicio = inject(FavoritasRecetasService)
  // recetas = signal<any[]>([])
  // recetasFavoritas = signal<any[]>([])

  // obtenerListadoRecetas(){
  //   this.recetas.set(this.recetasServicio.getRecetas())
  //   this.recetasFavoritas.set(this.recetasFavServicio.getRecetasFav())
  //   console.log("Pulsado el Tab Home")
  // }

  constructor(private router: Router) {}

obtenerListadoRecetas() {
  // Navega a la misma página para forzar la recarga
  // reinitializar la página a la que vamos
}

}
