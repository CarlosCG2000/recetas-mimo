import { Component, inject, signal } from '@angular/core';
import { RecetasService } from '../../servicios/recetas.service';
import { debounceTime, Subject } from 'rxjs';
import { FavoritasRecetasService } from '../../servicios/favoritas-recetas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tabListRecetas.page.html',
  styleUrls: ['tabListRecetas.page.scss']
})
export class TabListRecetasPage {

  recetasServicio = inject(RecetasService)
  recetasFavoritas = inject(FavoritasRecetasService)

  //recetas:any[] = []
  recetas = signal<any[]>([])
  categorias:any[] = []

  private nombreSubject = new Subject<string>();
  nombre: string = '';
  categoriaSeleccionada: string = 'nothing';

  constructor() {

    //this.recetas = this.recetasServicio.getRecetas()
    this.recetas.set(this.recetasServicio.getRecetas())

    //obtener todas las categorias disponibles
    this.recetasServicio.getCategorias()
    .subscribe((categorias:any) => {
      this.categorias = categorias.meals
    })

    this.nombreSubject.pipe(debounceTime(500)).subscribe((valor) => {
      // ionChangeNombre con el delay de 500 ms
      this.filtrarRecetas()
    });

  }

  ionChangeNombre(event: any){
    //Propiedades
    this.nombre = event.detail.value;
    this.nombreSubject.next(this.nombre);
    // Escucha los cambios con un delay de 500 ms
  }

  ionChangeCategoria(event: any){
    //Propiedades
    this.categoriaSeleccionada = event.target.value;
    this.filtrarRecetas()
  }

  filtrarRecetas(){
    if(this.nombre.trim() == '' && this.categoriaSeleccionada == 'nothing' ){         // && this.areaSeleccionada == 'nothing' // sin filtros
      // this.recetas = this.recetasServicio.getRecetas()
      this.recetas.set(this.recetasServicio.getRecetas())
    } else if(this.nombre.trim() != '' && this.categoriaSeleccionada == 'nothing'){   // && this.areaSeleccionada == 'nothing' // solo hay nombre
      //this.recetas = []
      this.recetas.set([])
      this.recetasServicio.getRecetas().map((receta: { strMeal: string; }) => {
        if (receta.strMeal.toLowerCase().includes(this.nombre.toLowerCase())) {
          // this.recetas = [...this.recetas, receta]
          this.recetas.set([...this.recetas(), receta])
        }
      })
    } else if(this.nombre.trim() == '' && this.categoriaSeleccionada != 'nothing' ){  // && this.areaSeleccionada == 'nothing'// si solo hay categoria
      // this.recetas = []
      this.recetas.set([])
      this.recetasServicio.getRecetas().map((receta) => {
        if (receta.strCategory === this.categoriaSeleccionada) {
          // this.recetas = [...this.recetas, receta]
          this.recetas.set([...this.recetas(), receta])
        }
      })
    } else if (this.nombre.trim() != '' && this.categoriaSeleccionada != 'nothing' ){ // && this.areaSeleccionada == 'nothing'// si hay nombre y categoria
      // this.recetas = []
      this.recetas.set([])

      this.recetasServicio.getRecetas().map((receta) => {
        if (receta.strCategory === this.categoriaSeleccionada && receta.strMeal.toLowerCase().includes(this.nombre.toLowerCase())) {
          // this.recetas = [...this.recetas, receta]
          this.recetas.set([...this.recetas(), receta])
        }
      })
    }
  }

}
