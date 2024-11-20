import { Component, inject } from '@angular/core';
import { FavoritasRecetasService } from '../../servicios/favoritas-recetas.service';
import { Prop } from 'ionicons/dist/types/stencil-public-runtime';
import { PropiasRecetasService } from '../../servicios/propias-recetas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3-recetas-propias.page.html',
  styleUrls: ['tab3-recetas-propias.page.scss']
})
export class Tab3RecetasPropiasPage {

  recetasFavServicio = inject(FavoritasRecetasService)
  misRecetasServicio = inject(PropiasRecetasService)

  constructor(private router: Router) {}

  navegarFormulario() {
    this.router.navigate(["/formulario-receta"])
  }

}
