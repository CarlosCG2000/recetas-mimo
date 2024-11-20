import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropiasRecetasService } from 'src/app/servicios/propias-recetas.service';
import { RecetasService } from 'src/app/servicios/recetas.service';

@Component({
  selector: 'app-detalles-receta-completa',
  templateUrl: './detalles-receta-completa.page.html',
  styleUrls: ['./detalles-receta-completa.page.scss'],
})
export class DetallesRecetaCompletaPage implements OnInit {

  private recetasService = inject(RecetasService)
  private misRecetasServicio = inject(PropiasRecetasService)

  private route = inject(ActivatedRoute)
  private location = inject(Location)
  id: string = ''
  receta: any
  ingredientes: Array<{ nombre: string, medida: string }> = [];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(this.id)

    // Recetas de la lista de recetas o en favoritos son recetas de la APIo Mock de recetas
    if(this.id.length < 12){
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
    // Las recetas propias no vienen de la API, sino que se guardan en el LocalStorage
    } else {
      this.receta = this.misRecetasServicio.getRecetaId(this.id)
      console.log(this.receta)

      this.receta.strIngredientsMeasures.split(',').forEach((ingrediente: string) => {
        const [nombre, medida] = ingrediente.split('-');
        this.ingredientes.push({ nombre, medida });
      })
    }

  }

  irAtras() {
    this.location.back()
  }

}
