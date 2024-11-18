import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3RecetasPropiasPage } from './tab3-recetas-propias.page';

import { Tab3RecetasPropiasPageRoutingModule } from './tab3-recetas-propias-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3RecetasPropiasPageRoutingModule
  ],
  declarations: [Tab3RecetasPropiasPage]
})
export class Tab3RecetasPropiasPageModule {}
