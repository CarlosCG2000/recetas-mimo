import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import recetas from '../mocks/recetas.json';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  // recetasJson = recetas.meals;
  // como un signal el recetasJson
  //recetasJson = recetas.meals;
  recetasJson = signal<any[]>(recetas.meals)

  // ========== EL PROBLEMA QUE SOLO SAQUE 25 ITEMS NO ME SACA TODOS LOS ITEMS ==========
  // urlRecetasCategoria = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
  // urlRecetasArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a='
  // urlRecetasNombre = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  // =================================================================================

  urlRecetaId = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
  urlCategorias = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
  // urlAreas = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'

  private httpClient = inject(HttpClient)

  // recetasFavoritasComp = computed(() => {
  //   const recetasFavFromStorage = localStorage.getItem('recetas-fav');
  //   return this.recetasJson();
  // });

  constructor() { }

  // getRecetasCategoria(categoria: string){
  //   return this.httpClient.get(this.urlRecetasCategoria+categoria);
  // }

  // getRecetasArea(area: string){
  //   return this.httpClient.get(this.urlRecetasArea+area);
  // }

  // getRecetasNombre(nombre: string){
  //   return this.httpClient.get(this.urlRecetasNombre+nombre);
  // }

  // getAreas(){
  //   return this.httpClient.get(this.urlAreas);
  // }

  getRecetas(){
    return this.recetasJson();
  }

  getRecetaById(id: string){
    return this.httpClient.get(this.urlRecetaId+id);
  }

  getCategorias(){
    return this.httpClient.get(this.urlCategorias);
  }
}
