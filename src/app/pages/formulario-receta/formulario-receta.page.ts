import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropiasRecetasService } from 'src/app/servicios/propias-recetas.service';
import { Location } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { RecetasPropias } from 'src/app/models/RecetasPropias';
import { RecetasService } from 'src/app/servicios/recetas.service';
import { FavoritasRecetasService } from 'src/app/servicios/favoritas-recetas.service';

@Component({
  selector: 'app-formulario-receta',
  templateUrl: './formulario-receta.page.html',
  styleUrls: ['./formulario-receta.page.scss'],
})
export class FormularioRecetaPage  {

  mealForm: FormGroup;
  misRecetasServicio = inject(PropiasRecetasService)
  recetasFavoritasService = inject(FavoritasRecetasService)
  recetasService = inject(RecetasService)
  private route = inject(ActivatedRoute)
  id: string = ''
  receta:any
  categorias:any[] = []

  constructor(private fb: FormBuilder, private router: Router, private location: Location) {

    this.recetasService.getCategorias()
    .subscribe((categorias:any) => {
      this.categorias = categorias.meals
    })

    this.id = this.route.snapshot.paramMap.get('idReceta') ?? '';
    console.log(this.id)

    if(this.id == ''){
      this.mealForm = this.fb.group({
        idMeal: [uuidv4(), Validators.required],
        strMeal: ['', Validators.required],
        strCategory: ['',  Validators.required],
        strArea: ['',  Validators.required],
        strInstructions: ['', Validators.required],
        strMealThumb: [ '',  Validators.required],
        strIngredientsMeasures: ['',  Validators.required],
        strYoutube: [''],
        strSource: ['']
      });
    } else {
      this.receta = this.misRecetasServicio.getRecetaId(this.id)

      this.mealForm = this.fb.group({
        idMeal: [this.id, Validators.required],
        strMeal: [this.receta.strMeal, Validators.required],
        strCategory: [this.receta.strCategory,  Validators.required],
        strArea: [this.receta.strArea,  Validators.required],
        strInstructions: [this.receta.strInstructions, Validators.required],
        strMealThumb: [this.receta.strMealThumb,  Validators.required],
        strIngredientsMeasures: [this.receta.strIngredientsMeasures,  Validators.required],
        strYoutube: [this.receta.strYoutube],
        strSource: [this.receta.strSource]
      });
    }

  }

  onSubmit() {
    console.log(this.mealForm.value);

    let receta = new RecetasPropias(
        this.mealForm.value.idMeal,
        this.mealForm.value.strMeal,
        this.mealForm.value.strCategory,
        this.mealForm.value.strArea,
        this.mealForm.value.strInstructions,
        this.mealForm.value.strMealThumb,
        this.mealForm.value.strIngredientsMeasures,
        this.mealForm.value.strYoutube,
        this.mealForm.value.strSource
    );

    if(this.id == '')
      this.misRecetasServicio.addNewReceta(receta) // this.mealForm.value
    else
    {
      this.misRecetasServicio.updateReceta(receta) // this.mealForm.value
      if (this.recetasFavoritasService.getRecetaById(this.id) != null){
        this.recetasFavoritasService.updateRecetasFav(receta)
      }
    }

    this.router.navigate(["/recetas-propias"])
  }

  irAtras() {
    this.location.back()
  }

}

