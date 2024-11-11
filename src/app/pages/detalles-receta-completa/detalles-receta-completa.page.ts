import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from 'src/app/servicios/recetas.service';

@Component({
  selector: 'app-detalles-receta-completa',
  templateUrl: './detalles-receta-completa.page.html',
  styleUrls: ['./detalles-receta-completa.page.scss'],
})
export class DetallesRecetaCompletaPage implements OnInit {

  private recetasService = inject(RecetasService)
  private route = inject(ActivatedRoute)
  private location = inject(Location)
  id: string = ''
  receta: any
  ingredientes: Array<{ nombre: string, medida: string }> = [];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(this.id)

    this.recetasService.getRecetaById(this.id)
      .subscribe((receta: any) => { // me debo de subscriber al Publisers
        this.receta = receta.meals[0]
        console.log(receta.meals[0])

        for (let i = 1; i <= 20; i++) {
          const ingrediente = this.receta[`strIngredient${i}`];
          const medida = this.receta[`strMeasure${i}`];
          if (ingrediente && ingrediente.trim()) {
            this.ingredientes.push({ nombre: ingrediente, medida: medida });
          }
        }
      })

  }

  irAtras() {
    this.location.back()
  }

}
