import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropiasRecetasService } from 'src/app/servicios/propias-recetas.service';
import { Location } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-formulario-receta',
  templateUrl: './formulario-receta.page.html',
  styleUrls: ['./formulario-receta.page.scss'],
})
export class FormularioRecetaPage  {

  mealForm: FormGroup;
  misRecetasServicio = inject(PropiasRecetasService)
  private route = inject(ActivatedRoute)
  id: string = ''
  receta:any

  constructor(private fb: FormBuilder, private router: Router, private location: Location) {

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
    if(this.id == '')
      this.misRecetasServicio.addNewReceta(this.mealForm.value)
    else
      this.misRecetasServicio.updateReceta(this.mealForm.value)

    this.router.navigate(["/recetas-propias"])
  }

  irAtras() {
    this.location.back()
  }

}

