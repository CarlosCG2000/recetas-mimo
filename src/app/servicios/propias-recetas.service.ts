import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropiasRecetasService {

  recetasPropias = localStorage.getItem("recetas-propias") ? signal<any[]>(JSON.parse(localStorage.getItem("recetas-propias")!)) : signal<any[]>([]); // El operador ! se utiliza para indicar al compilador de TypeScript que getItem() no devolverá null en este punto, ya que está dentro del bloque condicional.

  constructor() {
    this.recetasPropias.set(localStorage.getItem("recetas-propias") ? JSON.parse(localStorage.getItem("recetas-propias")!) : [])
  }

  getRecetasPropias() {
    return this.recetasPropias()
  }

  getRecetaId(id: string) {
    return this.recetasPropias().find((receta) => receta.idMeal === id)
  }

  addNewReceta(receta: any) {
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

  updateReceta(receta: any) {
    const currentRecetasPropias = this.getRecetasPropias()
    const index = currentRecetasPropias.findIndex((recetaItem) => recetaItem.idMeal === receta.idMeal)
    currentRecetasPropias[index] = receta // actualizamos la receta
    this.recetasPropias.set(currentRecetasPropias)
    localStorage.setItem("recetas-propias", JSON.stringify(this.recetasPropias()))
  }
}
