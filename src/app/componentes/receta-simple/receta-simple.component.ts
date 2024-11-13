import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { FavoritasRecetasService } from 'src/app/servicios/favoritas-recetas.service';
import { RecetasService } from 'src/app/servicios/recetas.service';

@Component({
  selector: 'app-receta-simple',
  templateUrl: './receta-simple.component.html',
  styleUrls: ['./receta-simple.component.scss'],
})
export class RecetaSimpleComponent implements OnInit {

  @Input() receta: any;
  @Input() sinModi: any;
  @Input() estadoFav: any;
  //@Output() cambioFav = new EventEmitter();

  // handleClickFav() {
  //   this.cambioFav.emit()
  // }

  sinTip = false
  tips: string[] = []

  tipInput: string = '';

  recetaService = inject(RecetasService)
  favService = inject(FavoritasRecetasService)

  constructor() {}

  ngOnInit() {
    //buscar la receta completa por su id
    this.recetaService.getRecetaById(this.receta.idMeal)
    .subscribe((receta:any) => {
      this.receta = receta.meals[0]
    })

    // Comprobamos que la receta se encuentra en el LocalStorage de recetas favoritas para devolver el icono de de estrella con o sin relleno
    this.sinTip = this.favService.getRecetaTip(this.receta.idMeal)

    if(this.sinTip){
      this.tips = this.favService.getRecetaById(this.receta.idMeal).tips
    }
  }

  favRecetaModificar()
  {
    console.log(`Receta favorita ${this.receta.idMeal}`)
    this.estadoFav = this.favService.addDeleteRecetasFav(this.receta)
  }

  inputTips(event:any){
    this.tipInput = event.detail.value
    console.log(this.tipInput)
  }

  addTip(){
    if (this.tipInput.trim() !== '') {
      this.favService.addTipsRecetasFav(this.receta.idMeal, this.tipInput);
      this.tips = this.favService.getRecetaById(this.receta).tips
      this.tipInput = ' ';
    }
  }

  deleteTip(tip:any){
    this.favService.removeTipsRecetasFav(this.receta.idMeal, tip)
  }

}
