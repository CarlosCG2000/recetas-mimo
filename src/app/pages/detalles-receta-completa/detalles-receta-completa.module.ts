import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesRecetaCompletaPageRoutingModule } from './detalles-receta-completa-routing.module';

import { DetallesRecetaCompletaPage } from './detalles-receta-completa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesRecetaCompletaPageRoutingModule
  ],
  declarations: [DetallesRecetaCompletaPage]
})
export class DetallesRecetaCompletaPageModule {}
