import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3RecetasPropiasPage } from './tab3-recetas-propias.page';

import { Tab3RecetasPropiasPageRoutingModule } from './tab3-recetas-propias-routing.module';
import { RecetaSimpleComponentModule } from "../../componentes/receta-simple/receta-simple.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3RecetasPropiasPageRoutingModule,
    RecetaSimpleComponentModule
],
  declarations: [Tab3RecetasPropiasPage]
})
export class Tab3RecetasPropiasPageModule {}
