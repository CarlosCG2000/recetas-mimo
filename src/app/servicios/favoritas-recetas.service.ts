import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritasRecetasService {

  //forma json
  // {
  //     "strMeal": "Beef Wellington",
  //     "strMealThumb": "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
  //     "idMeal": "52803",
  //     "strCategory": "Beef"
  // }

  // si esta en el local storage, se carga a la estrella, si no se queda sin el fondo amarillo
  // se guarda en el local storage
  // se borra del local storage  (lista de fav)
  // se muestra si es favorito o no en la receta simple comparando con el local storage par asaber si se encuentra

  recetasFav = localStorage.getItem("recetas-fav") ? signal<any[]>(JSON.parse(localStorage.getItem("recetas-fav")!)) : signal<any[]>([]); // El operador ! se utiliza para indicar al compilador de TypeScript que getItem() no devolverá null en este punto, ya que está dentro del bloque condicional.

  // Definimos un Signal (para actualizar el num de items)
  numItemsFav = computed(() => {
    return this.recetasFav().length
  })

  constructor() {
    // Cargar los productos del carrito desde el LocalStorage
    this.recetasFav.set(localStorage.getItem("recetas-fav") ? JSON.parse(localStorage.getItem("recetas-fav")!) : [])
  }

  getRecetasFav() {
    return this.recetasFav()
  }

  getRecetaTip(id: string) {
    let receta = this.recetasFav().find((receta) => receta.idMeal === id)

    return receta?.tips === undefined ? false : true
    // if (receta.tips == undefined){
    //   return false
    // }else{
    //   return true
    // }
  }

  getRecetaById(id: string) {
    return this.recetasFav().find((receta) => receta.idMeal === id)
  }

  addDeleteRecetasFav(receta: any) {
    const currentRecetasFav = this.getRecetasFav()
    this.recetasFav.set(currentRecetasFav)

    console.log("Recetas Fav:")
    console.log(this.recetasFav())

    console.log("Receta")
    console.log(receta)

    // COMPROBAR SI EL PRODUCTO YA ESTÁ EN EL CARRITO
    let indice = currentRecetasFav.findIndex((recetaItem) => recetaItem.idMeal === receta.idMeal)

    console.log("Indice "+indice)

    if (indice == -1) {

      this.recetasFav.update((recetas) => [...recetas, receta]); // la propagación de arrays (...recetas) para crear un nuevo array

      // alert(`Receta ${receta.strMeal} añadida a favoritos`)


      localStorage.setItem("recetas-fav", JSON.stringify(this.recetasFav()))

      return true // para que el  icono de la estrella me lo dibuje
    } else {

      this.recetasFav.update((recetas) =>
        recetas.filter((recetaItem) => recetaItem.idMeal !== receta.idMeal)
      );

      // alert(`Receta ${receta.strMeal} eliminada de favoritos`)

      localStorage.setItem("recetas-fav", JSON.stringify(this.recetasFav()))

      return false // para que el  icono de la estrella me lo borre
    }
  }

  estadoFavReceta(idReceta: string) {
    return this.recetasFav().findIndex((recetaItem: any) => recetaItem.idMeal === idReceta) !== -1
  }

  addTipsRecetasFav(idReceta: string, tip: string) {
    // Buscar el producto por su ID o alguna propiedad identificadora
    // Comporbar si la receta tiene un campo 'tips' y si no, agregarlo
    const recetaIndex = this.recetasFav().findIndex((recetaItem: any) => recetaItem.idMeal === idReceta);
    this.recetasFav()[recetaIndex].tips

    if (this.recetasFav()[recetaIndex].tips === undefined) {
      // Agregar el campo 'cantidad' al producto encontrado
      this.recetasFav()[recetaIndex] = {
        ...this.recetasFav()[recetaIndex],
        tips: [tip]
      }

      localStorage.setItem("recetas-fav", JSON.stringify(this.recetasFav()))
      // alert(`Añadido a ${this.recetasFav()[recetaIndex].strMeal} el primer tip: ${tip}`)
      this.recetasFav.set(localStorage.getItem("recetas-fav") ? JSON.parse(localStorage.getItem("recetas-fav")!) : [])
      this.getRecetasFav()
    } else {
      // Agregar el tip al array de tips
      this.recetasFav()[recetaIndex].tips.push(tip)

      localStorage.setItem("recetas-fav", JSON.stringify(this.recetasFav()))

      // alert(`Añadido a ${this.recetasFav()[recetaIndex].strMeal} un nuevo tip: ${tip}`)
    }
  }

  removeTipsRecetasFav(idReceta: string, indexTip:any) {
    // Buscar el producto por su ID o alguna propiedad identificadora
    const recetaIndex = this.recetasFav().findIndex((recetaItem: any) => recetaItem.idMeal === idReceta);

    // Eliminar el tip del array de tips
    this.recetasFav()[recetaIndex].tips.splice(indexTip, 1)

    localStorage.setItem("recetas-fav", JSON.stringify(this.recetasFav()))

    // alert(`Eliminado el tip de ${this.recetasFav()[recetaIndex].strMeal}`)
  }


}
