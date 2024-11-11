import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RecetaDetalladaComponent } from './receta-detallada.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [RecetaDetalladaComponent],
  exports: [RecetaDetalladaComponent]
})
export class RecetaDetalladaComponentModule{}
