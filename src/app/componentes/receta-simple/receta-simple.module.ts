import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RecetaSimpleComponent } from './receta-simple.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [RecetaSimpleComponent],
  exports: [RecetaSimpleComponent]
})
export class RecetaSimpleComponentModule{}
