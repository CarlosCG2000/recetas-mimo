import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioRecetaPageRoutingModule } from './formulario-receta-routing.module';

import { FormularioRecetaPage } from './formulario-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioRecetaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormularioRecetaPage]
})
export class FormularioRecetaPageModule {}
