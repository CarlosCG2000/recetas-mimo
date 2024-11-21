import { Injectable, signal } from '@angular/core';
import { RecetasPropias } from '../models/RecetasPropias';

@Injectable({
  providedIn: 'root'
})
export class PropiasRecetasService {

  recetasPropias = localStorage.getItem("recetas-propias") ? signal<RecetasPropias[]>(JSON.parse(localStorage.getItem("recetas-propias")!)) : signal<RecetasPropias[]>([]);

  constructor() {
    this.recetasPropias.set(localStorage.getItem("recetas-propias") ? JSON.parse(localStorage.getItem("recetas-propias")!) : [])
  }

  getRecetasPropias() {
    return this.recetasPropias()
  }

  getRecetaId(id: string) {
    return this.recetasPropias().find((receta) => receta.idMeal === id)
  }

  addNewReceta(receta: RecetasPropias) {
    const currentRecetasPropias = this.getRecetasPropias()
    currentRecetasPropias.push(receta)
    this.recetasPropias.set(currentRecetasPropias)
    localStorage.setItem("recetas-propias", JSON.stringify(this.recetasPropias()))
  }

  deleteReceta(id: string) {
    const currentRecetasPropias = this.getRecetasPropias()
    this.recetasPropias.set(currentRecetasPropias.filter((receta) => receta.idMeal !== id))
    localStorage.setItem("recetas-propias", JSON.stringify(this.recetasPropias()))
  }

  updateReceta(receta: RecetasPropias) {
    const currentRecetasPropias = this.getRecetasPropias()
    const index = currentRecetasPropias.findIndex((recetaItem) => recetaItem.idMeal === receta.idMeal)
    currentRecetasPropias[index] = receta // actualizamos la receta
    this.recetasPropias.set(currentRecetasPropias)
    localStorage.setItem("recetas-propias", JSON.stringify(this.recetasPropias()))
  }
}
