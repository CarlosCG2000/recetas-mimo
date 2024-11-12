import { Component, inject } from '@angular/core';
import { RecetasService } from '../servicios/recetas.service';
import { FormControl } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tabListRecetas.page.html',
  styleUrls: ['tabListRecetas.page.scss']
})
export class TabListRecetasPage {

  estado = true
  recetasServicio = inject(RecetasService)
  recetas:any[] = []

  categorias:any[] = []
  areas:any[] = []

  private nombreSubject = new Subject<string>();
  nombre: string = '';
  categoriaSeleccionada: string = 'Seafood';
  areaSeleccionada: string = 'nothing';

  constructor() {
    //obtener recetas por categoria Seafood por defecto en la pantalla inicial
    this.recetasServicio.getRecetasCategoria('Seafood')
    .subscribe((recetas:any) => {
      this.recetas = recetas.meals
    })

    //obtener todas las categorias disponibles
    this.recetasServicio.getCategorias()
    .subscribe((categorias:any) => {
      this.categorias = categorias.meals
    })

    //obtener todas las areas disponibles
    this.recetasServicio.getAreas()
    .subscribe((areas:any) => {
      this.areas = areas.meals
    })

    this.nombreSubject.pipe(debounceTime(1000)).subscribe((valor) => {
      console.log('Nombre:', valor);
      console.log('Categoría seleccionada:', this.categoriaSeleccionada);
      console.log('Área seleccionada:', this.areaSeleccionada);

      // ionChangeNombre con el delay de 1000 ms
      // filtrar por los 3 campos
      this.filtrarRecetas()
    });

  }

  ionChangeNombre(event: any){
    //Propiedades
    //this.nombre = event.target.value;
    this.nombre = event.detail.value;
    this.nombreSubject.next(this.nombre);

    // Escucha los cambios con un delay de 300 ms
    // console.log('Nombre:', this.nombre);
    // console.log('Categoría seleccionada:', this.categoriaSeleccionada);
    // console.log('Área seleccionada:', this.areaSeleccionada);
  }

  ionChangeCategoria(event: any){
    //Propiedades
    this.categoriaSeleccionada = event.target.value;

    console.log('Nombre:', this.nombre);
    console.log('Categoría seleccionada:', this.categoriaSeleccionada);
    console.log('Área seleccionada:', this.areaSeleccionada);

    //filtrar por los 3 campos
    this.filtrarRecetas()

  }

  ionChangeArea(event: any){
    //Propiedades
    this.areaSeleccionada = event.target.value;

    console.log('Nombre:', this.nombre);
    console.log('Categoría seleccionada:', this.categoriaSeleccionada);
    console.log('Área seleccionada:', this.areaSeleccionada);

    //filtrar por los 3 campos
    this.filtrarRecetas()
  }

  filtrarRecetas(){
    if(this.nombre.trim() == '' && this.categoriaSeleccionada == 'nothing' && this.areaSeleccionada == 'nothing'){ // si no hay filtros muestro la categoria por defecto de Seafood
      this.recetasServicio.getRecetasCategoria('Seafood')
      .subscribe((recetas:any) => {
        this.recetas = recetas.meals
      })
    } else if(this.nombre.trim() != '' && this.categoriaSeleccionada == 'nothing' && this.areaSeleccionada == 'nothing'){ // si solo hay nombre
      this.recetasServicio.getRecetasNombre(this.nombre)
      .subscribe((recetas:any) => {
        this.recetas = recetas.meals
      })
    } else if(this.nombre.trim() == '' && this.categoriaSeleccionada != 'nothing' && this.areaSeleccionada == 'nothing'){ // si solo hay categoria
      this.recetasServicio.getRecetasCategoria(this.categoriaSeleccionada)
      .subscribe((recetas:any) => {
        this.recetas = recetas.meals
      })
    } else if(this.nombre.trim() == '' && this.categoriaSeleccionada == 'nothing' && this.areaSeleccionada != 'nothing'){ // si solo hay area
      this.recetasServicio.getRecetasArea(this.areaSeleccionada)
      .subscribe((recetas:any) => {
        this.recetas = recetas.meals
      })
    } else if(this.nombre.trim() != '' && this.categoriaSeleccionada != 'nothing' && this.areaSeleccionada == 'nothing'){ // si hay nombre y categoria
      this.recetasServicio.getRecetasNombre(this.nombre)
      .subscribe((recetas:any) => {
        let recetasNombre = recetas.meals
        console.log("hola1")
        this.recetasServicio.getRecetasCategoria(this.categoriaSeleccionada)
        .subscribe((recetas:any) => {
          let recetasCategoria = recetas.meals
          console.log("hola2")
          if (recetasNombre == null && recetasCategoria == null){
            this.recetas = []
          }
          else if(recetasNombre == null){
            this.recetas = recetasCategoria
          } else if(recetasCategoria == null){
            this.recetas = recetasNombre
          } else {
            console.log("hola3")
            // si se encuentra el mismo nombre 'strMeal' de la receta en categoria y nombre
            this.recetas = recetasNombre.filter(
              (recetaNombre: { strMeal: any; }) => {
              return recetasCategoria.find((recetaCategoria: { strMeal: any; }) =>
                                          recetaCategoria.strMeal == recetaNombre.strMeal)
            })
            console.log(this.recetas)
            console.log("hola4")
          }
        })

      })
    } else if (this.nombre.trim() != '' && this.categoriaSeleccionada == 'nothing' && this.areaSeleccionada != 'nothing'){ // si hay nombre y area
      this.recetasServicio.getRecetasNombre(this.nombre)
      .subscribe((recetas:any) => {
        let recetasNombre = recetas.meals

        this.recetasServicio.getRecetasArea(this.areaSeleccionada)
        .subscribe((recetas:any) => {
          let recetasArea = recetas.meals

          // si se encuentra el mismo nombre 'strMeal' de la receta en area y nombre
          this.recetas = recetasNombre.filter(
            (recetaNombre: { strMeal: any; }) => {
            return recetasArea.find((recetaArea: { strMeal: any; }) =>
                                        recetaArea.strMeal == recetaNombre.strMeal)
          })
        })

      })
    } else if (this.nombre.trim() == '' && this.categoriaSeleccionada != 'nothing' && this.areaSeleccionada != 'nothing'){ // si hay categoria y area
      this.recetasServicio.getRecetasCategoria(this.categoriaSeleccionada)
      .subscribe((recetas:any) => {
        let recetasCategoria = recetas.meals

        this.recetasServicio.getRecetasArea(this.areaSeleccionada)
        .subscribe((recetas:any) => {
          let recetasArea = recetas.meals

          // si se encuentra el mismo nombre 'strMeal' de la receta en area y categoria
          this.recetas = recetasCategoria.filter(
            (recetaCategoria: { strMeal: any; }) => {
            return recetasArea.find((recetaArea: { strMeal: any; }) =>
                                        recetaArea.strMeal == recetaCategoria.strMeal)
          })
        })

      })
    } else if (this.nombre.trim() != '' && this.categoriaSeleccionada != 'nothing' && this.areaSeleccionada != 'nothing'){ // si hay nombre, categoria y area
      this.recetasServicio.getRecetasNombre(this.nombre)
      .subscribe((recetas:any) => {
        let recetasNombre = recetas.meals

        this.recetasServicio.getRecetasCategoria(this.categoriaSeleccionada)
        .subscribe((recetas:any) => {
          let recetasCategoria = recetas.meals

          this.recetasServicio.getRecetasArea(this.areaSeleccionada)
          .subscribe((recetas:any) => {
            let recetasArea = recetas.meals

            // si se encuentra el mismo nombre 'strMeal' de la receta en area, categoria y nombre
            this.recetas = recetasNombre.filter(
              (recetaNombre: { strMeal: any; }) => {
              return recetasCategoria.find((recetaCategoria: { strMeal: any; }) =>
                                          recetaCategoria.strMeal == recetaNombre.strMeal)
            }).filter(
              (recetaNombre: { strMeal: any; }) => {
              return recetasArea.find((recetaArea: { strMeal: any; }) =>
                                          recetaArea.strMeal == recetaNombre.strMeal)
            })
          })

        })

      })
    }
  }

}
