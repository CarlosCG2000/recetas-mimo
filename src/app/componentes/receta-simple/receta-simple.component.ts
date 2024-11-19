import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { FavoritasRecetasService } from 'src/app/servicios/favoritas-recetas.service';
import { PropiasRecetasService } from 'src/app/servicios/propias-recetas.service';
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
  //@Input() recetaPropia: any;
  //@Output() cambioFav = new EventEmitter();

  // handleClickFav() {
  //   this.cambioFav.emit()
  // }

  sinTip = false
  tips: string[] = []

  tipInput: string = '';

  recetaService = inject(RecetasService)
  favService = inject(FavoritasRecetasService)
  misRecetasService = inject(PropiasRecetasService)

  constructor(private router: Router) {}

  ngOnInit() {
    // AQUI ES DONDE PETA ( IDEA QUE AQUI SOLO ENTRE SI NO ES UNA RECETA PROPIA, ES DECIR SINO VIENE DE LA API/MOCKS DE RECETAS)
    if(this.receta.idMeal.length < 15){
      //buscar la receta completa por su id
      this.recetaService.getRecetaById(this.receta.idMeal)
      .subscribe((receta:any) => {
        this.receta = receta.meals[0]
        console.log(this.receta)
      })
    }

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
      this.tips = this.favService.getRecetaById(this.receta.idMeal).tips
      this.tipInput = '';
      console.log(`input ${ this.tipInput}`)
    }
  }

  deleteTip(tip:any){
    this.favService.removeTipsRecetasFav(this.receta.idMeal, tip)
  }

  propiaRecetaModificar(){
    console.log(`Modificando receta propia ${this.receta.idMeal}`);
    this.router.navigate(["/formulario-receta", {idReceta: this.receta.idMeal}])
  }

  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  eliminarRecetaModificar(evento:any){
    console.log(`Entramos en la eliminación del elemento ${this.receta.idMeal}`);
    if(evento.detail.role === 'confirm'){
      this.misRecetasService.deleteReceta(this.receta.idMeal)
      console.log(`Eliminación del elemento ${this.receta.idMeal}`);
      if(this.estadoFav){
        this.favService.addDeleteRecetasFav(this.receta)
        console.log(`eliminación del elemento ${this.receta.idMeal} de favoritas`);
      }
      this.isAlertOpen = false;
    } else
      console.log(`Cancelando la eliminación del elemento ${this.receta.idMeal}`);
      this.isAlertOpen = false;
  }

  isAlertOpen = false;

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
