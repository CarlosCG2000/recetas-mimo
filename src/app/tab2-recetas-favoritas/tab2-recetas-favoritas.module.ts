import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2RecetasFavoritasPage } from './tab2-recetas-favoritas.page';

import { Tab2RecetasFavoritasPageRoutingModule } from './tab-recetas-favoritas-routing.module';
import { RecetaSimpleComponentModule } from "../componentes/receta-simple/receta-simple.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2RecetasFavoritasPageRoutingModule,
    RecetaSimpleComponentModule
],
  declarations: [Tab2RecetasFavoritasPage]
})
export class Tab2RecetasFavoritasPageModule {}
