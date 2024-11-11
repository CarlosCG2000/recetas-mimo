import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// import recetas from '../mocks/recetas-area.json';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  // recetasJson = recetas.meals;
  recetasJson = []
  urlRecetasCategoria = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
  urlRecetasArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a='
  urlRecetasNombre = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  urlRecetaId = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

  private httpClient = inject(HttpClient)

  constructor() { }

  getRecetasCategoria(categoria: string){
    return this.httpClient.get(this.urlRecetasCategoria+categoria);
  }

  getRecetasArea(area: string){
    return this.httpClient.get(this.urlRecetasArea+area);
  }

  getRecetasNombre(nombre: string){
    return this.httpClient.get(this.urlRecetasNombre+nombre);
  }

  getRecetaById(id: string){
    return this.httpClient.get(this.urlRecetaId+id);
  }

}
