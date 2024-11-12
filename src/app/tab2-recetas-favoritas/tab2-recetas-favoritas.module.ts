import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2RecetasFavoritasPage } from './tab2-recetas-favoritas.page';
import { ExploreContainerComponentModule } from '../componentes/explore-container/explore-container.module';

import { Tab2RecetasFavoritasPageRoutingModule } from './tab-recetas-favoritas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2RecetasFavoritasPageRoutingModule
  ],
  declarations: [Tab2RecetasFavoritasPage]
})
export class Tab2RecetasFavoritasPageModule {}
